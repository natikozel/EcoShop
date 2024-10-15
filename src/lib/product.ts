"use server";

import {getDb} from "@/lib/dbClient";
import {revalidatePath} from "next/cache";
import {s3} from "@/lib/util";

const bucket = process.env.AWS_S3_BUCKET_NAME;

export async function handleNewProductAddition(prevState: any, formData: any) {

    const product = {
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        category: formData.get('category'),
        images: formData.get('image'),
        amount: formData.get('amount'),
    };

    const imagesStrings: any = [];
    let i = 0;
    while (true) {
        const image = formData.get(`image${i}`);
        if (!image) {
            break;
        }
        const extension = image.name.split('.').pop();
        const fileName = `${product.name}'index:${i++}'.${extension}`;
        const bufferedImage = await image.arrayBuffer();

        await s3.putObject({
            Bucket: bucket,
            Key: fileName,
            Body: Buffer.from(bufferedImage),
            ContentType: image.type,
        });

        imagesStrings.push(`https://netanelkozel-ecommerce-secondhandshop.s3.eu-north-1.amazonaws.com/${fileName}`);
    }

    const db = getDb();
    await db.product.create({
        data: {
            name: product.name,
            description: product.description,
            price: parseFloat(product.price),
            category: product.category,
            images: imagesStrings,
            amount: parseInt(product.amount),
        }
    });

    revalidatePath('/', "layout");
    return {success: true};


}
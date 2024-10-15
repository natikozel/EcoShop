'use server';
import {getDb} from "@/lib/dbClient";

export async function searchProducts(searchTerm: string) {
    const db = getDb();
    return db.product.findMany({
        where: {
            OR: [
                {name: {contains: searchTerm, mode: 'insensitive'}},
                {description: {contains: searchTerm, mode: 'insensitive'}},
            ],
        },
        take: 5, // Limit the number of results
    });
}
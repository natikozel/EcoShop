"use client";

import {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {AlertCircle, Loader2} from 'lucide-react';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {handleNewProductAddition} from "@/lib/product";
import {useFormState} from "react-dom";

export default function AddProduct() {

    const [isLoading, setIsLoading] = useState(false);
    const ref = useRef<HTMLFormElement>(null);
    const [error, setError] = useState('');
    const [imageInputs, setImageInputs] = useState<string[]>(['']);
    const router = useRouter();

    const initialState: any = {
        name: '',
        description: '',
        price: '',
        category: '',
        amount: '',
        images: [],
    };
    const [state, formAction] = useFormState(handleNewProductAddition, initialState);
    const handleAddImageInput = () => {
        setImageInputs([...imageInputs, '']);
    };

    const handleRemoveImageInput = (index: number) => {
        setImageInputs(imageInputs.filter((_, i) => i !== index));
    };
    useEffect(() => {
        if (state?.success) {
            ref.current?.reset();
            setImageInputs(['']);
        }
    }, [router, state]);
    return (
        <div className="container mx-auto px-4 py-8 mt-16">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">הוסף מוצר חדש לחנות</h1>
            <form ref={ref} action={formAction} className="max-w-2xl mx-auto">
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="name">שם הפריט</Label>
                        <Input
                            id="name"
                            name="name"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="description">תיאור</Label>
                        <Textarea
                            id="description"
                            name="description"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="price">מחיר בשקלים</Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            step="0.01"
                            min="0"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="amount">כמות</Label>
                        <Input
                            id="amount"
                            name="amount"
                            type="number"
                            step="1"
                            min="1"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="category">קטגוריה</Label>
                        <Select name="category"
                                required>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a category"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="women">{"בגדי נשים"}</SelectItem>
                                <SelectItem value="men">{"בגדי גברים"}</SelectItem>
                                <SelectItem value="children">{"בגדי ילדים"}</SelectItem>
                                <SelectItem value="baby">בגדי תינוקות</SelectItem>
                                <SelectItem value="watches">שעונים</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {/*<div>*/}
                    {/*    <Label htmlFor="condition">Condition</Label>*/}
                    {/*    <Select name="condition" onValueChange={(value) => handleSelectChange('condition', value)}*/}
                    {/*            required>*/}
                    {/*        <SelectTrigger>*/}
                    {/*            <SelectValue placeholder="Select condition"/>*/}
                    {/*        </SelectTrigger>*/}
                    {/*        <SelectContent>*/}
                    {/*            <SelectItem value="new">New</SelectItem>*/}
                    {/*            <SelectItem value="like-new">Like New</SelectItem>*/}
                    {/*            <SelectItem value="good">Good</SelectItem>*/}
                    {/*            <SelectItem value="fair">Fair</SelectItem>*/}
                    {/*        </SelectContent>*/}
                    {/*    </Select>*/}
                    {/*</div>*/}
                    <div>
                        <Label htmlFor="image">תמונה</Label>
                        {imageInputs.map((input, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <Input
                                    required
                                    id={`image-${index}`}
                                    name={`image${index}`}
                                    type="file"
                                />
                                {index > 0 && (
                                    <Button type="button" onClick={() => handleRemoveImageInput(index)}>-</Button>
                                )}
                            </div>
                        ))}
                        <Button type="button" onClick={handleAddImageInput}>+</Button>
                    </div>
                    {error && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4"/>
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {state?.success && (
                        <Alert variant="default">
                            <AlertCircle className="h-4 w-4"/>
                            {/*<AlertTitle>הצלחה</AlertTitle>*/}
                            <AlertDescription className={"whitespace-pre-wrap"}>
                                {`פריט הוסף בהצלחה!
ניתן להמשיך להוסיף פריטים נוספים`}
                            </AlertDescription>
                        </Alert>
                    )}
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                                מוסיף פריט...
                            </>
                        ) : (
                            'הוסף'
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
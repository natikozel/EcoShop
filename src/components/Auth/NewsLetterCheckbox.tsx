import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";

export default function NewsLetterCheckbox() {
    return (
        <div className="flex items-center gap-2">
            <Checkbox
                id="newsletter"
                name="newsletter"
            />
            <Label
                className={"font-semibold"}
                htmlFor="newsletter">
                {"אשר קבלת עדכונים במייל על מוצרים חדשים    "}
            </Label>
        </div>
    );
}
import {Label} from "@/components/ui/label";
import {User} from "lucide-react";
import {Input} from "@/components/ui/input";

export default function FullName() {
    return (
        <div>
            <Label htmlFor="fullName">שם מלא</Label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400"/>
                </div>
                <Input
                    type="text"
                    id="name"
                    name={"name"}
                    className="pl-10"
                    placeholder="ישראל ישראלי"
                />
            </div>
        </div>
    );
}
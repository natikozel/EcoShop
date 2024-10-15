import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {signOut} from "next-auth/react";

export default function LogoutDialog({isOpen, setIsOpen}: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {


    const handleSignout = async () => {

        setIsOpen(false);
        await signOut({callbackUrl: '/'});

    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>התנתקות</DialogTitle>
                    <DialogDescription>
                        האם אתה בטוח שברצונך להתנתק?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-center gap-2">
                    <Button type="button" variant="secondary" onClick={() => setIsOpen(false)}>
                        בטל
                    </Button>
                    <Button type="button" variant="destructive" onClick={handleSignout}>
                        התנתק
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );

}
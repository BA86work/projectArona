import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function RegisModal() {
    return (
        <>
            <div className="grid place-items-center h-screen">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">ลงทะเบียน</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>ลงทะเบียนรับประกัน</DialogTitle>
                            <DialogDescription>
                                เพื่อสิทธิประโยชน์สูงสุดของคุณ <br /> ลงทะเบียนตอนนี้รับฟรี!!
                                เฉาก๊วยชากังราว
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    ชื่อผู้ใช้
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="โปรดระบุชื่อผู้ใช้"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    รหัสผ่าน
                                </Label>
                                <Input
                                    id="username"
                                    placeholder="กรุณากรอกรหัสผ่าน"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" variant="outline">
                                ลงทะเบียน
                            </Button>
                            <Button type="submit">เข้าสู่ระบบ</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}

export default RegisModal;

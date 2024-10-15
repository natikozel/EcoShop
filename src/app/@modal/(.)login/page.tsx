import Login from "@/components/Auth/Login";
import Modal from "@/components/Modal";

export default function InterceptedLogin() {

    return (
        <Modal>
            <Login/>
        </Modal>
    );
}
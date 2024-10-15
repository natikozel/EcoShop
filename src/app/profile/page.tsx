import ProfileHeader from "@/components/Profile/ProfileHeader";
import TabsContainer from "@/components/Profile/TabsContainer";

export default function UserProfile() {

    // const [orders, setOrders] = useState([
    //     {
    //         id: '1', date: '01/05/2023', total: 150.00, status: 'נמסר', items: [
    //             {name: 'מנורה וינטג', price: 75.00, quantity: 1},
    //             {name: 'ספר עתיק', price: 75.00, quantity: 1},
    //         ]
    //     },
    //     {
    //         id: '2', date: '15/06/2023', total: 89.99, status: 'בעיבוד', items: [
    //             {name: 'שעון רטרו', price: 89.99, quantity: 1},
    //         ]
    //     },
    // ]);


    return (
        <div className="relative py-12 md:py-28 h-screen container mx-auto p-4 space-y-6">
            <ProfileHeader/>
            <TabsContainer/>
        </div>
    );
}
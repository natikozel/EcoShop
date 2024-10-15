'use client';

import {useTransition, useOptimistic} from 'react';
import {Heart} from 'lucide-react';
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {likeProduct} from "@/lib/dbUtil";


interface LikeButtonProps {
    productId: string;
    isLiked: boolean;
}

export default function LikeButton({productId, isLiked: initialIsLiked}: LikeButtonProps) {
    const {data: session} = useSession();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [optimisticIsLiked, setOptimisticIsLiked] = useOptimistic(
        initialIsLiked,
        (_, newIsLiked: boolean) => newIsLiked
    );

    const handleLike = () => {
        if (!session)
            router.push('/login');
        else {
            startTransition(async () => {
                setOptimisticIsLiked(!optimisticIsLiked);
                await likeProduct(session.user.userId, productId);
            });
        }
    };

    return (
        <button
            onClick={handleLike}
            disabled={isPending}
            aria-label={optimisticIsLiked ? "Unlike" : "Like"}
            className={`
        p-2 rounded-full transition-all duration-300 ease-in-out
        ${optimisticIsLiked
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-transparent text-gray-500 hover:bg-gray-100'}
      `}
        >
            <Heart
                className={`h-6 w-6 ${optimisticIsLiked ? 'fill-current' : 'stroke-2'}`}
            />
        </button>
    );
}
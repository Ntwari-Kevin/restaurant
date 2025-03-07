
import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  trending?: boolean;
}

const MenuCard = ({
  name,
  price,
  description,
  image,
  category,
  trending = false,
}: MenuCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 200) + 20);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 hover-scale group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        {trending && (
          <div className="absolute top-4 left-4 bg-ckyc-gold/90 text-white text-xs font-medium py-1 px-3 rounded-full">
            Trending
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-medium text-ckyc-gold uppercase tracking-wider">
              {category}
            </span>
            <h3 className="text-lg font-semibold text-ckyc-charcoal mt-1">{name}</h3>
          </div>
          <span className="font-semibold text-ckyc-charcoal">{price}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        {/* Like Button */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleLike}
            className="flex items-center gap-1.5 text-sm"
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <Heart
              size={18}
              className={cn(
                "transition-colors duration-300",
                isLiked ? "fill-red-500 text-red-500" : "text-gray-400"
              )}
            />
            <span className="text-gray-500">{likeCount}</span>
          </button>
          
          <a
            href="#"
            className="text-sm font-medium text-ckyc-gold hover:text-ckyc-gold-dark transition-colors duration-300"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

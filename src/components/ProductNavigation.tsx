import { MessageSquare, Palette, Users, Utensils, Phone, Globe, BarChart3, Cpu } from "lucide-react";

interface Product {
  icon: any;
  iconColor: string;
  title: string;
}

interface ProductNavigationProps {
  products: Product[];
  currentIndex: number;
  onProductSelect: (index: number) => void;
}

const ProductNavigation = ({ products, currentIndex, onProductSelect }: ProductNavigationProps) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-3">
        {products.map((product, index) => {
          const IconComponent = product.icon;
          const isActive = index === currentIndex;
          
          return (
            <button
              key={index}
              onClick={() => onProductSelect(index)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                isActive 
                  ? `${product.iconColor} shadow-lg` 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
              }`}
              title={product.title}
            >
              {product.title === "VidLingual多语言翻译工具" ? (
                <img src="/lovable-uploads/12db14f5-4309-4dc4-9981-7aa0e853233c.png" alt="Video icon" className="w-6 h-6" />
              ) : (
                <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : 'text-white/70'}`} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductNavigation;
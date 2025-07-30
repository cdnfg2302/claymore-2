import { MessageSquare, Palette, Users, Utensils, Phone, Globe, BarChart3, Cpu } from "lucide-react";

interface Product {
  icon: any;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

interface ProductSliderProps {
  products: Product[];
  currentIndex: number;
}

const ProductSlider = ({ products, currentIndex }: ProductSliderProps) => {
  const getProductImage = (title: string) => {
    const imageMap: { [key: string]: string } = {
      "Claymore聊天智能体": "/lovable-uploads/29bbd104-a828-4728-b204-b0995826e1e5.png",
      "绘画智能体": "/lovable-uploads/ccac6ac9-4166-4947-afaa-4771687a9eff.png",
      "换脸智能体": "/lovable-uploads/805d49ac-22eb-45c0-b51b-06c840c620d4.png",
      "智能硬件ESP32开发板": "/lovable-uploads/2a09496d-0a60-4d07-a634-803c7ba0ef26.png",
      "TikTok直播数据获取工具": "/lovable-uploads/7eeaf74c-c58f-40b9-be5d-7757d1586572.png",
      "VidLingual多语言翻译工具": "/lovable-uploads/89e6d498-5788-4574-b8b2-6ad46bf8b710.png",
      "电话外呼智能体": "/lovable-uploads/66e42bea-a48f-4141-9f5b-58860fd31d51.png",
      "Claymore智能菜单": "/lovable-uploads/1ef9462a-4977-41ba-9ccb-cb4e845d3b95.png"
    };
    return imageMap[title] || "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2";
  };

  const getImageAlignment = (title: string) => {
    return (title === "电话外呼智能体") ? "object-left" : 
           (title === "VidLingual多语言翻译工具") ? "object-top" : "";
  };

  return (
    <div className="relative">
      {products.map((product, index) => {
        const IconComponent = product.icon;
        
        return (
          <section
            key={index}
            id={`product-${index}`}
            className="min-h-screen flex items-center justify-center px-4 py-16"
            style={{
              background: index === 0 ? 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)' : // 聊天智能体-蓝色系(类似微信)
                         index === 1 ? 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)' : // 绘画智能体-紫色系(创意)
                         index === 2 ? 'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)' : // 换脸智能体-绿色系(活力)
                         index === 3 ? 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%)' : // 智能菜单-橙色系(美食)
                         index === 4 ? 'linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%)' : // 电话外呼-红色系(热情)
                         index === 5 ? 'linear-gradient(135deg, #0891b2 0%, #0ea5e9 50%, #38bdf8 100%)' : // 多语言翻译-青色系(全球化)
                         index === 6 ? 'linear-gradient(135deg, #be185d 0%, #e91e63 50%, #f472b6 100%)' : // TikTok数据-粉色系(类似TikTok)
                         'linear-gradient(135deg, #374151 0%, #4b5563 50%, #6b7280 100%)' // ESP32硬件-灰色系(科技感)
            }}
          >
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 items-center min-h-[80vh]">
                {/* 左侧内容 - 3份 */}
                <div className="text-white space-y-8 animate-fade-in lg:col-span-3">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 ${product.iconColor} rounded-2xl flex items-center justify-center`}>
                        {product.title === "VidLingual多语言翻译工具" ? (
                          <img src="/lovable-uploads/12db14f5-4309-4dc4-9981-7aa0e853233c.png" alt="Video icon" className="w-8 h-8" />
                        ) : (
                          <IconComponent className="w-8 h-8 text-white" />
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        {product.title}
                      </h1>
                      <p className="text-lg text-white/90 font-medium uppercase tracking-wide">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl leading-relaxed text-white/95 max-w-2xl">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-white/80 rounded-full mr-3"></div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                    了解更多
                  </button>
                </div>
                
                {/* 右侧图片 - 5份 */}
                <div className="relative animate-fade-in lg:col-span-5" style={{ animationDelay: '0.2s' }}>
                  <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-black/20 to-transparent rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={getProductImage(product.title)}
                      alt={product.title}
                      className={`w-full h-full object-cover ${getImageAlignment(product.title)}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* 装饰性元素 */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductSlider;
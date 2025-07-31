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
    <div className="relative overflow-hidden">
      <div 
        className="transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * 100}vh)`,
        }}
      >
        {products.map((product, index) => {
          const IconComponent = product.icon;
          
          return (
            <section
              key={index}
              id={`product-${index}`}
              className="h-screen flex items-center justify-center px-4 relative overflow-hidden"
              style={{
                backgroundImage: 'url(/lovable-uploads/8a0364df-92aa-443e-9597-8a313da828c4.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* 背景字母效果 */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 text-gray-100/[0.02] text-8xl font-bold transform -rotate-12">C</div>
                <div className="absolute top-32 right-32 text-gray-100/[0.03] text-6xl font-bold transform rotate-45">L</div>
                <div className="absolute top-64 left-64 text-gray-100/[0.02] text-9xl font-bold transform -rotate-6">A</div>
                <div className="absolute bottom-48 right-16 text-gray-100/[0.03] text-7xl font-bold transform rotate-12">Y</div>
                <div className="absolute bottom-32 left-32 text-gray-100/[0.02] text-5xl font-bold transform -rotate-24">M</div>
                <div className="absolute top-48 right-64 text-gray-100/[0.03] text-8xl font-bold transform rotate-30">O</div>
                <div className="absolute bottom-64 right-48 text-gray-100/[0.02] text-6xl font-bold transform -rotate-18">R</div>
                <div className="absolute top-80 left-48 text-gray-100/[0.03] text-7xl font-bold transform rotate-8">E</div>
                <div className="absolute top-16 right-80 text-gray-100/[0.02] text-9xl font-bold transform -rotate-30">C</div>
                <div className="absolute bottom-16 left-80 text-gray-100/[0.03] text-8xl font-bold transform rotate-15">L</div>
              </div>
              <div className="max-w-7xl mx-auto w-full -mt-48">
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-52 items-center h-full">
                  {/* 左侧内容 - 3份 */}
                  <div className="text-gray-800 space-y-8 animate-fade-in lg:col-span-3 text-left">
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
                        <p className="text-lg text-gray-600 font-medium uppercase tracking-wide">
                          {product.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-xl leading-relaxed text-gray-700 max-w-2xl">
                      {product.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                      了解更多
                    </button>
                  </div>
                  
                  {/* 右侧图片 - 5份 */}
                  <div className="relative animate-fade-in lg:col-span-5" style={{ animationDelay: '0.2s' }}>
                    <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-black/20 to-transparent rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={getProductImage(product.title)}
                        alt={product.title}
                        className="w-full h-full object-cover object-left"
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
    </div>
  );
};

export default ProductSlider;
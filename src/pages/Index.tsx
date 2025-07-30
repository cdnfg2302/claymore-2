import { MessageSquare, Palette, Users, Utensils, Phone, Globe, BarChart3, Cpu } from "lucide-react";
import ProductSlider from "../components/ProductSlider";
import ProductNavigation from "../components/ProductNavigation";
import { useProductSlider } from "../hooks/useProductSlider";

const Index = () => {
  const products = [
    {
      icon: MessageSquare,
      iconColor: "bg-blue-500",
      title: "Claymore聊天智能体",
      subtitle: "CHAT AGENT",
      description: "基于大语言模型的智能对话系统，支持多轮对话、上下文理解和个性化回复。可广泛应用于客服、咨询、教育等场景。",
      features: ["多轮对话", "上下文理解", "个性化回复", "多场景适配"]
    },
    {
      icon: Palette,
      iconColor: "bg-purple-500",
      title: "绘画智能体",
      subtitle: "AI ART GENERATOR",
      description: "先进的AI绘画生成系统，支持文本到图像、风格转换、图像编辑等功能。让创意无限延伸，艺术触手可及。",
      features: ["文本生图", "风格转换", "图像编辑", "高清输出"]
    },
    {
      icon: Users,
      iconColor: "bg-green-500",
      title: "换脸智能体",
      subtitle: "FACE SWAP AI",
      description: "基于深度学习的人脸替换技术，实现高质量、自然的人脸交换效果。支持视频和图片处理，广泛应用于娱乐和创意制作。",
      features: ["高精度换脸", "视频处理", "实时预览", "批量处理"]
    },
    {
      icon: Utensils,
      iconColor: "bg-orange-500",
      title: "Claymore智能菜单",
      subtitle: "MENU TRANSLATION AI",
      description: "专为餐饮行业打造的智能翻译系统，支持菜单拍照识别、多语言翻译和文化适配，让美食跨越语言障碍。",
      features: ["拍照识别", "多语言翻译", "文化适配", "菜品推荐"]
    },
    {
      icon: Phone,
      iconColor: "bg-red-500",
      title: "电话外呼智能体",
      subtitle: "AI CALL CENTER",
      description: "智能语音外呼系统，具备自然语音交互、意图识别和情感分析能力。提升客户服务效率，降低人工成本。",
      features: ["语音识别", "意图理解", "情感分析", "自动记录"]
    },
    {
      icon: Globe,
      iconColor: "bg-indigo-500",
      title: "VidLingual多语言翻译工具",
      subtitle: "YOUTUBE MULTI-LANGUAGE PUBLISHER",
      description: "一键将YouTube视频翻译成多种语言并自动发布，支持字幕生成、语音合成和视频优化，助力内容全球化传播。",
      features: ["多语言翻译", "字幕生成", "语音合成", "自动发布"]
    },
    {
      icon: BarChart3,
      iconColor: "bg-pink-500",
      title: "TikTok直播数据获取工具",
      subtitle: "TIKTOK LIVE DATA ANALYTICS",
      description: "实时监控和分析TikTok直播数据，提供观众行为分析、热点话题追踪和营销效果评估，助力直播运营优化。",
      features: ["实时监控", "数据分析", "热点追踪", "效果评估"]
    },
    {
      icon: Cpu,
      iconColor: "bg-teal-500",
      title: "智能硬件ESP32开发板",
      subtitle: "ESP32 SMART HARDWARE",
      description: "基于ESP32芯片的智能硬件开发平台，集成AI算法和物联网功能，支持边缘计算和实时数据处理。",
      features: ["边缘计算", "物联网连接", "AI算法", "实时处理"]
    }
  ];

  const { currentIndex, scrollToProduct } = useProductSlider(products.length);

  return (
    <div className="relative">
      {/* 产品滑动区域 */}
      <ProductSlider products={products} currentIndex={currentIndex} />
      
      {/* 右侧导航 */}
      <ProductNavigation 
        products={products} 
        currentIndex={currentIndex} 
        onProductSelect={scrollToProduct}
      />
      
      {/* 底部CTA - 固定在最后一个产品后 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">开启AI智能化之旅</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            我们的产品矩阵覆盖了从对话交互到视觉创作，从数据分析到硬件开发的全方位AI解决方案。每一个产品都经过精心打磨，致力于为用户提供最优质的智能化体验。
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {["全球化部署", "高性能处理", "企业级安全"].map((feature, index) => (
              <div key={index} className="flex items-center text-white/70">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
          
          <button className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-10 py-5 rounded-xl font-medium text-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
            联系我们了解更多
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;

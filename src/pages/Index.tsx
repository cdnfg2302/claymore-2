import { MessageSquare, Palette, Users, Utensils, Phone, Globe, BarChart3, Cpu } from "lucide-react";

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-blue-700 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            我们的产品
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            八大核心产品矩阵，覆盖AI智能体、多媒体处理、数据分析和智能硬件等领域
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-center">
                      {/* 左侧内容 */}
                      <div className="space-y-6 lg:col-span-5">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 ${product.iconColor} rounded-xl flex items-center justify-center`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.title}</h3>
                              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{product.subtitle}</p>
                            </div>
                          </div>
                          <div className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
                        
                        <div className="grid grid-cols-2 gap-3">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* 右侧图片 */}
                      <div className="relative h-64 lg:h-80 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-xl overflow-hidden lg:col-span-3">
                        <img 
                          src={product.title === "Claymore聊天智能体" ? "/lovable-uploads/29bbd104-a828-4728-b204-b0995826e1e5.png" : product.title === "TikTok直播数据获取工具" ? "/lovable-uploads/7eeaf74c-c58f-40b9-be5d-7757d1586572.png" : product.title === "VidLingual多语言翻译工具" ? "/lovable-uploads/89e6d498-5788-4574-b8b2-6ad46bf8b710.png" : product.title === "电话外呼智能体" ? "/lovable-uploads/66e42bea-a48f-4141-9f5b-58860fd31d51.png" : product.title === "Claymore智能菜单" ? "/lovable-uploads/1ef9462a-4977-41ba-9ccb-cb4e845d3b95.png" : "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"} 
                          alt={product.title}
                          className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                        {/* Tech network overlay */}
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute top-4 left-4 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                          <div className="absolute top-8 right-8 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                          <div className="absolute bottom-8 right-6 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">开启AI智能化之旅</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            我们的产品矩阵覆盖了从对话交互到视觉创作，从数据分析到硬件开发的全方位AI解决方案。每一个产品都经过精心打磨，致力于为用户提供最优质的智能化体验。
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {["全球化部署", "高性能处理", "企业级安全"].map((feature, index) => (
              <div key={index} className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-lg">
            联系我们了解更多
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;

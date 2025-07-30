const Index = () => {
  const products = [
    "聊天智能体",
    "绘画智能体", 
    "换脸智能体",
    "菜单翻译智能体",
    "电话外呼智能体",
    "YouTube多语言翻译发布工具",
    "TikTok直播数据获取工具",
    "智能硬件esp32开发板"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
      {/* Navigation */}
      <nav className="bg-primary shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded"></div>
              </div>
              <span className="text-xl font-bold text-primary-foreground">
                Claymore AI Lab
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-primary-foreground hover:text-white/80 transition-colors">关于我们</a>
              <a href="#" className="text-primary-foreground hover:text-white/80 transition-colors">我们的产品</a>
              <a href="#" className="text-primary-foreground hover:text-white/80 transition-colors">新闻动态</a>
              <a href="#" className="text-primary-foreground hover:text-white/80 transition-colors">加入我们</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <div className="text-muted-foreground text-sm mb-4">使命</div>
                <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                  激发创造<br />
                  智能未来
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  专注于人工智能技术的创新与应用，为用户提供智能化解决方案
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-6xl font-bold text-white opacity-20">AI</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl"></div>
      </div>

      {/* Products Section */}
      <div className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">我们的产品</h2>
            <p className="text-center text-muted-foreground mb-12">创新的AI解决方案，赋能各行各业</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-border/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {product}
                      </h3>
                      <div className="text-sm text-muted-foreground">AI智能解决方案</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

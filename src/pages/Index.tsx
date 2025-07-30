// Update this page (the content is just a fallback if you fail to update the page)

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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-foreground mb-12">
            Claymore AI Lab
          </h1>
          
          <div className="space-y-4">
            {products.map((product, index) => (
              <div 
                key={index}
                className="text-lg text-foreground py-2 border-b border-border/30 last:border-b-0"
              >
                {product}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

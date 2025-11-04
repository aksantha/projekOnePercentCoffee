import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/menuData";
import { MenuDetailDialog } from "@/components/MenuDetailDialog";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState<typeof menuItems[0] | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animate");
          } else {
            entry.target.classList.remove("scroll-animate");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".observe-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const groupedMenu = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menuItems>);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center observe-scroll">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Menu Kami
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Setiap minuman dibuat dengan biji kopi pilihan dan keahlian barista profesional
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {Object.entries(groupedMenu).map(([category, items], categoryIndex) => (
              <div key={categoryIndex} className="observe-scroll">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="overflow-hidden gradient-card shadow-card hover-lift observe-scroll group cursor-pointer"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {item.shortDesc}
                          </p>
                          <p className="text-2xl font-bold text-primary">
                            Rp {item.price}
                          </p>
                        </div>
                        <Button 
                          className="w-full shadow-soft hover:shadow-card transition-smooth"
                          onClick={() => setSelectedMenu(item)}
                        >
                          Lihat Selengkapnya
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MenuDetailDialog 
        selectedMenu={selectedMenu} 
        onClose={() => setSelectedMenu(null)} 
      />

      {/* Note Section */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center observe-scroll">
          <p className="text-muted-foreground">
            *Harga dapat berubah sewaktu-waktu. Untuk informasi lebih lanjut, hubungi kami.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Menu;

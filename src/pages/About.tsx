import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import storefrontImage from "@/assets/storefront.jpg";

const About = () => {
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
  const values = [
    {
      icon: Target,
      title: "Misi Kami",
      description:
        "Menghadirkan pengalaman kopi yang menginspirasi dan membantu setiap orang menjadi 1% lebih baik setiap harinya melalui secangkir kopi berkualitas.",
    },
    {
      icon: Users,
      title: "Komunitas",
      description:
        "Membangun ruang yang nyaman untuk bertemu, bekerja, dan berbagi cerita. Setiap pelanggan adalah bagian dari keluarga SatuPersen.",
    },
    {
      icon: Award,
      title: "Kualitas Premium",
      description:
        "Komitmen pada kualitas terbaik, dari pemilihan biji kopi hingga penyajian setiap cangkir dengan standar barista profesional.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center observe-scroll">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Tentang Kami
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cerita di balik secangkir kopi yang menginspirasi
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 observe-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Filosofi SatuPersen
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SatuPersen Coffee lahir dari keyakinan sederhana namun kuat: peningkatan
                1% setiap hari akan membawa perubahan besar dalam hidup. Seperti proses
                menyeduh kopi yang sempurna, kesuksesan memerlukan kesabaran, dedikasi,
                dan perhatian terhadap detail.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kami memilih nama "SatuPersen" untuk mengingatkan diri sendiri dan
                pelanggan kami bahwa setiap hari adalah kesempatan untuk menjadi lebih
                baik. Dan apa cara yang lebih baik untuk memulai hari selain dengan
                secangkir kopi berkualitas di ruang yang tenang dan inspiratif?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sejak dibuka pada tahun 2023, SatuPersen Coffee telah menjadi rumah kedua
                bagi para pencinta kopi, freelancer, dan siapa saja yang mencari ruang
                untuk berpikir, berkarya, dan berkembang.
              </p>
            </div>
            <div className="observe-scroll">
              <img
                src={storefrontImage}
                alt="SatuPersen Coffee Storefront"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prinsip yang memandu setiap cangkir yang kami sajikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center gradient-card shadow-card hover:shadow-hover transition-smooth observe-scroll"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tim Kami
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              SatuPersen Coffee dijalankan oleh tim barista profesional dan coffee
              enthusiast yang passionate tentang kualitas. Setiap anggota tim kami
              berkomitmen untuk menghadirkan pengalaman kopi terbaik dan menciptakan
              ruang yang ramah dan inspiratif.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kami terus belajar dan berkembang, mengikuti tren kopi terkini sambil
              mempertahankan nilai-nilai tradisional yang membuat kopi istimewa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kunjungi Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami senang mendengar dari Anda. Mari bertemu untuk secangkir kopi!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 gradient-card shadow-card hover:shadow-hover transition-smooth observe-scroll">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Lokasi</h3>
              <p className="text-sm text-muted-foreground">
                Jl. Inspirasi No. 99, Jakarta Selatan 12150
              </p>
            </Card>

            <Card className="p-6 gradient-card shadow-card hover:shadow-hover transition-smooth observe-scroll">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Telepon</h3>
              <p className="text-sm text-muted-foreground">+62 812 3456 7890</p>
            </Card>

            <Card className="p-6 gradient-card shadow-card hover:shadow-hover transition-smooth observe-scroll">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">hello@satupersen.coffee</p>
            </Card>

            <Card className="p-6 gradient-card shadow-card hover:shadow-hover transition-smooth observe-scroll">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Jam Operasional</h3>
              <p className="text-sm text-muted-foreground">
                Senin - Minggu: 08.00 - 22.00 WIB
              </p>
            </Card>
          </div>

          <div className="text-center observe-scroll">
            <h3 className="text-2xl font-bold text-foreground mb-6">Follow Us</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ikuti perjalanan kopi kami di Instagram dan dapatkan update terbaru
              tentang menu spesial, event, dan inspirasi harian.
            </p>
            <a
              href="https://instagram.com/satupersencoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-3 shadow-card hover:shadow-hover transition-smooth">
                <Instagram className="w-5 h-5" />
                @satupersencoffee
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Siap untuk Secangkir Inspirasi?
            </h2>
            <p className="text-lg text-muted-foreground">
              Kunjungi kami hari ini dan rasakan perbedaan SatuPersen Coffee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="tel:+6281234567890">
                <Button size="lg" className="shadow-card hover:shadow-hover transition-smooth">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </a>
              <a href="mailto:hello@satupersen.coffee">
                <Button
                  size="lg"
                  variant="outline"
                  className="shadow-soft hover:shadow-card transition-smooth"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Kirim Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

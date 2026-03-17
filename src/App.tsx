import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Truck,
  Home,
  Building2,
  Package,
  CalendarClock,
  ShieldCheck,
  Zap,
  ThumbsUp,
  CreditCard,
  MapPin,
  ChevronDown,
  ChevronUp,
  Phone,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  Clock,
  Star,
  CheckCircle,
} from 'lucide-react';

const WHATSAPP_NUMBER = "5586994390807";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento para frete/mudança.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-semibold text-slate-800 pr-4">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm"
  >
    {children}
  </a>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Zap, title: "Fretes Rápidos", desc: "Transporte ágil para pequenas cargas e encomendas urgentes. Atendimento no mesmo dia.", color: "from-orange-400 to-amber-500" },
    { icon: Home, title: "Mudanças Residenciais", desc: "Cuidamos da sua mudança de casa ou apartamento com total cuidado e profissionalismo.", color: "from-blue-500 to-indigo-600" },
    { icon: Building2, title: "Mudanças Comerciais", desc: "Transferência de escritórios e lojas com mínimo impacto no seu negócio.", color: "from-emerald-500 to-teal-600" },
    { icon: Package, title: "Transporte de Móveis", desc: "Coleta e entrega de móveis novos ou usados com proteção adequada.", color: "from-purple-500 to-violet-600" },
    { icon: CalendarClock, title: "Entregas Programadas", desc: "Agende o melhor dia e horário para o seu transporte. Pontualidade garantida.", color: "from-rose-500 to-pink-600" },
  ];

  const steps = [
    { number: "01", icon: MessageCircle, title: "Entre em contato", desc: "Mande uma mensagem no WhatsApp com origem, destino e o que precisa transportar." },
    { number: "02", icon: Clock, title: "Receba o orçamento", desc: "Em minutos você recebe um orçamento claro, sem surpresas ou taxas escondidas." },
    { number: "03", icon: CheckCircle, title: "Relaxe e aguarde", desc: "Agendamos o horário e cuidamos de tudo. Você só precisa abrir a porta." },
  ];

  const differentials = [
    { icon: ShieldCheck, title: "Segurança total", desc: "Seus móveis transportados com cuidado, embalagem adequada e proteção contra danos." },
    { icon: Zap, title: "Agilidade de verdade", desc: "Atendimento rápido, pontualidade e cumprimento rigoroso de todos os prazos." },
    { icon: ThumbsUp, title: "Confiança comprovada", desc: "Centenas de clientes satisfeitos em toda Teresina. Nossa reputação fala por nós." },
    { icon: CreditCard, title: "Pagamento facilitado", desc: "Pix, cartão de crédito, débito ou dinheiro — como preferir." },
  ];

  const testimonials = [
    { name: "Maria Silva", initials: "MS", color: "bg-blue-500", text: "Precisava de um frete rápido pro Dirceu e o Samuel me atendeu super bem. Preço justo e muito cuidado com a geladeira." },
    { name: "João Paulo", initials: "JP", color: "bg-emerald-500", text: "Mudança de escritório feita sem dor de cabeça. Chegaram no horário combinado e não arranharam nada. Recomendo!" },
    { name: "Ana Clara", initials: "AC", color: "bg-purple-500", text: "Excelente serviço! Contratei pra buscar um sofá no centro e foi tudo muito ágil. O motorista é muito educado." },
    { name: "Carlos Eduardo", initials: "CE", color: "bg-rose-500", text: "Já fiz dois fretes com eles aqui em Teresina. Confiança total, pode fechar de olho fechado. Serviço nota 10." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-200 antialiased">

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-0 overflow-hidden group"
      >
        <div className="flex items-center bg-[#25D366] text-white rounded-full shadow-xl shadow-green-500/30 px-4 py-3 group-hover:shadow-green-500/50 transition-shadow">
          <WhatsAppIcon className="w-7 h-7 flex-shrink-0" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-semibold group-hover:ml-2.5 text-sm">
            Orçamento rápido
          </span>
        </div>
      </motion.a>

      {/* ─── HEADER ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${scrolled ? 'bg-blue-600' : 'bg-white/20'}`}>
              <Truck className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Frete <span className={scrolled ? 'text-blue-600' : 'text-blue-300'}>Agora</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '#servicos', label: 'Serviços' },
              { href: '#como-funciona', label: 'Como funciona' },
              { href: '#depoimentos', label: 'Depoimentos' },
              { href: '#faq', label: 'FAQ' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              (86) 99439-0807
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden"
            >
              <div className="px-5 py-4 flex flex-col gap-4">
                {[
                  { href: '#servicos', label: 'Serviços' },
                  { href: '#como-funciona', label: 'Como funciona' },
                  { href: '#depoimentos', label: 'Depoimentos' },
                  { href: '#faq', label: 'FAQ' },
                ].map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-700 font-medium py-1"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-semibold mt-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/foto1.jpg"
            alt="Caminhão de frete e mudanças em Teresina – Frete Agora"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/90 to-slate-900/80" />
          {/* Decorative blobs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 pt-20 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-semibold tracking-widest uppercase mb-8">
                <MapPin className="w-3.5 h-3.5" />
                Teresina e Região
              </span>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Frete e Mudanças com{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Segurança
                </span>{' '}
                e{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Agilidade
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-lg">
                Evite dor de cabeça com mudanças mal feitas, atrasos e móveis danificados. Na Frete Agora, seu transporte é feito com cuidado, rapidez e responsabilidade do início ao fim.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-green-500/25 hover:-translate-y-0.5 hover:shadow-green-500/40"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Solicitar orçamento grátis
                </a>
                <a
                  href="#servicos"
                  className="flex items-center justify-center gap-2 text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-7 py-4 rounded-xl font-medium text-base transition-all hover:bg-white/5"
                >
                  Nossos serviços
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="mt-6 text-slate-400 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Atendimento rápido direto no WhatsApp · Resposta em minutos
              </p>
            </motion.div>

            {/* Right — Trust cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { icon: ShieldCheck, label: "Carga protegida", value: "100%", sub: "segurança garantida", color: "text-emerald-400" },
                { icon: Clock, label: "Frete no mesmo dia", value: "No mesmo dia", sub: "dependendo da agenda", color: "text-blue-400" },
                { icon: Star, label: "Clientes satisfeitos", value: "Centenas", sub: "em toda Teresina", color: "text-yellow-400" },
                { icon: CreditCard, label: "Formas de pagamento", value: "4 opções", sub: "Pix, cartão, dinheiro", color: "text-purple-400" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <card.icon className={`w-6 h-6 ${card.color} mb-3`} />
                  <p className="text-white font-bold text-xl mb-1">{card.value}</p>
                  <p className="text-white/60 text-xs">{card.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2.5 bg-white/40 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 bg-slate-50" id="servicos">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">O que fazemos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossos Serviços</h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              Seja um pequeno frete ou uma mudança completa, nós resolvemos com profissionalismo e agilidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col gap-5"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-3 transition-all"
                >
                  Solicitar orçamento
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 bg-blue-600 relative overflow-hidden" id="como-funciona">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-200 mb-3">Simples e rápido</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como funciona</h2>
            <p className="text-blue-100 max-w-xl mx-auto">
              Em apenas 3 passos, seu frete ou mudança está agendada.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-white/20" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-lg flex items-center justify-center text-blue-600 text-xs font-extrabold shadow-md">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-14"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-blue-700 px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              Começar agora
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── DIFFERENTIALS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl -z-10" />
              <img
                src="/foto2.jpg"
                alt="Serviço de mudança residencial em Teresina – Frete Agora"
                className="rounded-2xl shadow-xl object-cover h-[500px] w-full"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Carga Segura</p>
                  <p className="text-slate-500 text-xs">Embalagem e proteção</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Nossos diferenciais</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Por que escolher a Frete Agora?
              </h2>
              <p className="text-slate-500 mb-10 leading-relaxed">
                Nosso compromisso é oferecer um serviço confiável, profissional e acessível para Teresina e toda a região.
              </p>

              <div className="space-y-7">
                {differentials.map((diff, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                      <diff.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{diff.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{diff.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Trabalho real</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossa Frota em Ação</h2>
            <p className="text-slate-500">Trabalho sério e compromisso com a sua carga por toda Teresina.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/foto1.jpg', alt: 'Caminhão de frete e mudanças em Teresina – Frete Agora' },
              { src: '/foto2.jpg', alt: 'Serviço de mudança residencial em Teresina – Frete Agora' },
              { src: '/foto3.jpg', alt: 'Transporte de móveis em Teresina – Frete Agora' },
              { src: '/foto4.jpg', alt: 'Mudança comercial em Teresina – Frete Agora' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-slate-900" id="depoimentos">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que nossos clientes dizem</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A satisfação de quem já confiou no nosso trabalho em Teresina.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">Cliente verificado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Sobre nós</span>
            <h2 className="text-3xl font-bold text-slate-900">Quem está por trás</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800/20 rounded-full blur-3xl -ml-16 -mb-16" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop"
                  alt="Samuel Kennedy"
                  className="w-28 h-28 rounded-2xl object-cover border-2 border-blue-400/40 shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-1">Fundador</p>
                <h3 className="text-2xl font-bold text-white mb-3">Samuel Kennedy</h3>
                <blockquote className="text-slate-300 leading-relaxed text-sm md:text-base border-l-2 border-blue-500 pl-4">
                  "Sou um profissional comprometido em oferecer um serviço honesto, ágil e seguro. Aqui na Frete Agora, cada cliente é tratado com respeito e responsabilidade. Nosso objetivo é fazer com que sua mudança seja a parte mais fácil do seu dia."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-slate-50" id="faq">
        <div className="max-w-3xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Dúvidas comuns</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-slate-500">Tire suas dúvidas sobre nossos serviços</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y-0 px-6 md:px-8 py-2"
          >
            <FAQItem
              question="Vocês atendem no mesmo dia?"
              answer="Sim! Dependendo da nossa disponibilidade de agenda, conseguimos realizar fretes e mudanças no mesmo dia. Entre em contato pelo WhatsApp para confirmarmos."
            />
            <FAQItem
              question="Fazem mudanças completas?"
              answer="Sim, realizamos desde pequenos fretes de um único móvel até mudanças residenciais ou comerciais completas."
            />
            <FAQItem
              question="Como solicito orçamento?"
              answer="O orçamento é feito de forma rápida e sem burocracia pelo WhatsApp. Basta nos enviar o endereço de origem, destino e os itens a serem transportados."
            />
            <FAQItem
              question="Quais as formas de pagamento?"
              answer="Para facilitar para você, aceitamos pagamentos via Pix, Cartão de Crédito, Débito e Dinheiro."
            />
            <FAQItem
              question="Atendem fora de Teresina?"
              answer="Sim! Atendemos Teresina e toda a região. Para destinos mais distantes, entre em contato para verificarmos disponibilidade e custo."
            />
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                Precisa de frete<br />ou mudança?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-lg mx-auto">
                Fale agora no WhatsApp e receba seu orçamento grátis, sem compromisso.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-green-500/30 hover:-translate-y-1 hover:shadow-green-500/50"
              >
                <WhatsAppIcon className="w-7 h-7" />
                (86) 99439-0807
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Truck className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Frete <span className="text-blue-400">Agora</span></span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <MapPin className="w-3.5 h-3.5" />
                <span>Tabuleta – Teresina/PI · CEP 64027-280</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
              <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>

            {/* Contact */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] hover:text-[#20bd5a] font-semibold text-sm transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              (86) 99439-0807
            </a>
          </div>

          <div className="border-t border-slate-800 mt-10 pt-8 text-center text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Frete Agora. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

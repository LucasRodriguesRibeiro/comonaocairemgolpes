import React, { useState } from 'react';
import {
  ShieldCheck,
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  Lock,
  UserCheck,
  Star,
  ChevronDown,
  CreditCard,
  MousePointerClick,
  Info,
  ShieldAlert,
  History,
  CheckCircle
} from 'lucide-react';

// --- Shared Components ---

const CTAButton: React.FC<{ text: string; subtext?: string; className?: string }> = ({ text, subtext, className = "" }) => (
  <button className={`
    w-full max-w-lg py-5 px-8 rounded-2xl font-bold text-center text-white transition-all transform hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:shadow-none shadow-lg group
    bg-emerald-600 hover:bg-emerald-500 border-b-4 border-emerald-800
    ${className}
  `}>
    <span className="block text-xl md:text-2xl uppercase tracking-wide group-hover:scale-[1.02] transition-transform">
      {text}
    </span>
    {subtext && (
      <span className="block text-xs md:text-sm font-medium text-emerald-100 mt-1 opacity-90">
        {subtext}
      </span>
    )}
  </button>
);

const SectionTitle: React.FC<{ title: string; subtitle?: string; dark?: boolean; centered?: boolean }> = ({
  title,
  subtitle,
  dark = false,
  centered = true
}) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight uppercase tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left gap-4 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-800 md:text-lg">{question}</span>
        <ChevronDown className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-600 leading-relaxed pb-4 animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

// --- Sections ---

const Header = () => (
  <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 py-4 px-6 flex justify-between items-center text-slate-900 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]">
    <div className="flex items-center gap-2">
      <div className="bg-emerald-600 p-1.5 rounded-lg shadow-lg shadow-emerald-200">
        <ShieldCheck className="text-white" size={20} />
      </div>
      <span className="font-extrabold tracking-tighter text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">BLINDAGEM DIGITAL</span>
    </div>
  </header>
);

// 1. HERO (PRIMEIRA DOBRA)
const Hero = () => (
  <section className="relative pt-32 pb-16 px-6 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
    <div className="absolute top-0 left-0 w-full h-96 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent -z-10"></div>

    <div className="flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-emerald-700 font-bold text-xs mb-8 uppercase tracking-widest shadow-sm border border-emerald-100">
        <Lock size={12} className="animate-pulse" />
        Blinde seu celular em 1 hora
      </div>

      <h1 className="text-[2.6rem] font-black leading-[1.1] mb-6 text-slate-900 uppercase tracking-tighter">
        COMO <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">NÃO CAIR EM GOLPES</span> NO CELULAR
        <span className="block text-[1.4rem] md:text-2xl mt-4 text-slate-700 leading-tight">E SE PROTEGER DE FRAUDES, PIX FALSO E WHATSAPP CLONADO</span>
      </h1>

      <p className="text-lg text-slate-600 mb-10 px-2 leading-relaxed font-semibold">
        Proteja seu dinheiro, seu WhatsApp e sua família com um guia que fala a sua língua.
      </p>

      <div className="relative w-full mb-10 group perspective animate-float">
        <div className="absolute inset-0 bg-emerald-500/10 blur-[60px] rounded-full"></div>
        <div className="relative z-10 p-2 bg-white/50 backdrop-blur-sm rounded-[2.5rem] border border-white/50 shadow-2xl">
          <img
            src="/assets/images/mockup ebooks.png"
            className="w-full h-auto drop-shadow-2xl rounded-[2rem]"
            alt="Mockup Blindagem Digital"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) parent.innerHTML = '<div class="bg-slate-900 aspect-[4/3] rounded-[2rem] flex items-center justify-center text-emerald-500 font-black italic">PROJETO BLINDAGEM DIGITAL</div>';
            }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="flex text-amber-400 gap-1 drop-shadow-sm">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={22} fill="currentColor" />)}
        </div>
        <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Altamente recomendado</p>
      </div>
    </div>
  </section>
);

// 2. DOBRA DA IDENTIFICAÇÃO COM A DOR
const PainPoint = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto">
      <SectionTitle
        title="O perigo entra pelo celular"
        subtitle="Os golpistas não precisam mais arrombar a porta da sua casa. Eles entram por estas situações:"
      />

      <div className="grid grid-cols-1 gap-5 mt-10">
        <div className="p-6 rounded-[2rem] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="bg-red-50 text-red-500 p-3 rounded-2xl shadow-inner shrink-0">
            <Smartphone size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 border-b-2 border-red-100 inline-block mb-2">Mensagem do WhatsApp</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Fingindo ser seu filho ou parente pedindo dinheiro urgente para uma emergência falsa.</p>
          </div>
        </div>

        <div className="p-6 rounded-[2rem] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="bg-amber-50 text-amber-600 p-3 rounded-2xl shadow-inner shrink-0">
            <CreditCard size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 border-b-2 border-amber-100 inline-block mb-2">Pix de "Urgência"</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Histórias tristes que fazem você agir rápido e enviar dinheiro para criminosos.</p>
          </div>
        </div>

        <div className="p-6 rounded-[2rem] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm flex items-start gap-4">
          <div className="bg-blue-50 text-blue-500 p-3 rounded-2xl shadow-inner shrink-0">
            <MousePointerClick size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 border-b-2 border-blue-100 inline-block mb-2">Promoção Boa Demais</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Aquele produto muito barato que é só uma armadilha para roubar sua conta bancária.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 rounded-[2.5rem] bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <ShieldAlert size={80} />
        </div>
        <p className="relative z-10 text-white font-bold italic text-lg leading-relaxed">
          "Isso poderia acontecer comigo ou com alguém que eu amo hoje mesmo."
        </p>
      </div>
    </div>
  </section>
);

// 3. DOBRA DA VERDADE SIMPLES
const SimpleTruth = () => (
  <section className="py-20 px-6 bg-slate-950 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-emerald-600/10 blur-[100px] -z-0"></div>
    <div className="max-w-4xl mx-auto relative z-10">
      <SectionTitle
        title="A verdade simples"
        subtitle=""
        dark={true}
      />
      <div className="space-y-6 text-lg text-slate-300 leading-relaxed mt-4">
        <p className="bg-white/5 p-6 rounded-3xl border border-white/10">Os golpes ficaram invisíveis. Os criminosos agora usam sistemas que enganam até os mais atentos.</p>
        <p className="text-xl font-black text-emerald-400 text-center py-4 uppercase italic">Não é falta de inteligência.</p>
        <p className="p-6">Pessoas honestas caem porque ninguém ensinou o que observar. É apenas falta de uma orientação que fale o seu português.</p>
      </div>
    </div>
  </section>
);

// 5. DOBRA – O QUE A PESSOA VAI APRENDER
const Learning = () => (
  <section className="py-24 px-4 bg-slate-50">
    <div className="max-w-4xl mx-auto">
      <SectionTitle
        title="O que você vai aprender"
        subtitle="Pequenos cuidados que fazem uma diferença enorme na sua segurança."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {[
          "Identificar golpes rapidamente",
          "Evitar Pix fraudado",
          "Proteger o seu WhatsApp",
          "Comprar online com mais segurança",
          "Saber o que fazer se algo der errado",
          "Como blindar seus aplicativos de banco"
        ].map((text, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100">
            <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full">
              <CheckCircle size={20} />
            </div>
            <span className="font-bold text-slate-800">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 6. DOBRA – O QUE A PESSOA RECEBE
const Deliverables = () => (
  <section className="py-20 px-6 bg-slate-50 relative overflow-hidden">
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <SectionTitle title="O que você leva" subtitle="Um pacote completo pensado na sua tranquilidade." />

      <div className="grid grid-cols-1 gap-14 mt-12">
        {/* Item 1 */}
        <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-white flex flex-col items-center group">
          <div className="relative w-48 mb-8">
            <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="/assets/images/como nao cair em golpes.png"
              className="w-full h-auto rounded-2xl shadow-2xl relative z-10 transition-transform group-hover:-translate-y-3 duration-500"
              alt="Ebook Principal"
            />
          </div>
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black mb-4 uppercase tracking-tighter">Guia Principal</div>
          <h4 className="text-xl font-black text-slate-900 mb-3 uppercase italic">Blindagem Digital</h4>
          <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">O seu manual definitivo para nunca mais temer o celular.</p>
        </div>

        {/* Item 2 */}
        <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-white flex flex-col items-center group">
          <div className="relative w-48 mb-6">
            <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="/assets/images/lista de golpes.png"
              className="w-full h-auto rounded-2xl shadow-2xl relative z-10 transition-transform group-hover:-translate-y-3 duration-500"
              alt="Bônus 1"
            />
          </div>
          <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-black mb-4 flex items-center gap-1">
            <Star size={10} fill="currentColor" /> PRESENTE EXCLUSIVO
          </div>
          <h4 className="text-xl font-black text-slate-900 mb-2 uppercase italic">Lista de Golpes 2026</h4>
          <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">Para você conhecer os truques da vez antes deles chegarem a você.</p>
        </div>

        {/* Item 3 */}
        <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-white flex flex-col items-center group">
          <div className="relative w-48 mb-6">
            <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="/assets/images/whatsapp sem trava.png"
              className="w-full h-auto rounded-2xl shadow-2xl relative z-10 transition-transform group-hover:-translate-y-3 duration-500"
              alt="Bônus 2"
            />
          </div>
          <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-black mb-4 flex items-center gap-1">
            <Star size={10} fill="currentColor" /> PRESENTE EXCLUSIVO
          </div>
          <h4 className="text-xl font-black text-slate-900 mb-2 uppercase italic">WhatsApp Sem Travar</h4>
          <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">Como deixar seu WhatsApp mais leve e muito mais seguro.</p>
        </div>
      </div>
    </div>
  </section>
);

// 6.5. DOBRA – O QUE TEM DENTRO (VISÃO INTERNA)
const InsideLook = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="O que você vai dominar por dentro" subtitle="Não é apenas teoria. É um plano de ação prático para você retomar o controle total da sua vida digital." />

      <div className="mt-12 space-y-4">
        {[
          { cap: "01", title: "O Olhar do Golpista", desc: "Descubra o critério 'secreto' que os criminosos usam para escolher as vítimas e saiba como tirar o seu nome da lista deles hoje mesmo." },
          { cap: "02", title: "Blindagem Anti-Clone", desc: "A configuração de 30 segundos que torna impossível alguém roubar o seu WhatsApp, mesmo que você caia em um link por engano." },
          { cap: "03", title: "Banco à Prova de Pix", desc: "Como criar uma barreira digital no seu celular que impede que qualquer centavo saia da sua conta sem o seu comando real e consciente." },
          { cap: "04", title: "O Detector de Fraudes", desc: "O método infalível para identificar em 3 segundos se aquele anúncio ou site é uma loja real ou uma armadilha para roubar seus dados." }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 items-center hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black italic shrink-0 shadow-lg">
              {item.cap}
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 uppercase text-xs mb-1 tracking-wider">{item.title}</h4>
              <p className="text-slate-600 text-[11px] leading-relaxed font-bold">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


// 7. DOBRA – PARA QUEM É / PARA QUEM NÃO É
const Eligibility = () => (
  <section className="py-16 px-6 bg-slate-50">
    <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
        <h3 className="text-2xl font-black text-emerald-600 mb-8 uppercase tracking-tighter italic">É para você se:</h3>
        <ul className="space-y-4 text-slate-600 font-medium">
          <li className="flex gap-3">
            <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
            <span>Você sente medo ao ver um número desconhecido no Zap.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
            <span>Você usa Pix mas sempre confere 10 vezes com medo.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
            <span>Você quer proteger seus pais ou netos de criminosos.</span>
          </li>
        </ul>
      </div>

      <div className="bg-slate-900 p-10 rounded-3xl shadow-xl text-white">
        <h3 className="text-2xl font-black text-red-400 mb-8 uppercase tracking-tighter italic">NÃO é para você se:</h3>
        <ul className="space-y-4 text-slate-400 font-medium">
          <li className="flex gap-3">
            <AlertTriangle size={20} className="text-red-500 shrink-0" />
            <span>Você é um expert em tecnologia e já sabe tudo.</span>
          </li>
          <li className="flex gap-3">
            <AlertTriangle size={20} className="text-red-500 shrink-0" />
            <span>Você acha que nunca vai ser enganado e não precisa aprender.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

// 7.5. DOBRA – DEPOIMENTOS WHATSAPP STYLE
const Testimonials = () => (
  <section className="py-20 px-6 bg-emerald-50">
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="Quem já se protegeu" subtitle="Veja o que nossos alunos estão enviando no nosso grupo." />

      <div className="space-y-6 mt-12 px-2">
        {/* WhatsApp Bubble 1 */}
        <div className="flex flex-col items-start">
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md border border-slate-100 relative max-w-[90%]">
            <span className="block text-[10px] font-black text-emerald-600 mb-1 uppercase tracking-widest">Dona Maria Rita</span>
            <p className="text-sm text-slate-700 leading-relaxed italic">"Lucas, querido! O guia é maravilhoso. Consegui trancar meu WhatsApp igual você ensinou. Me sinto muito mais segura agora, obrigada!"</p>
            <div className="text-[9px] text-slate-400 text-right mt-1">14:20 ✓✓</div>
          </div>
        </div>

        {/* WhatsApp Bubble 2 */}
        <div className="flex flex-col items-start translate-x-4">
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md border border-slate-100 relative max-w-[90%]">
            <span className="block text-[10px] font-black text-blue-600 mb-1 uppercase tracking-widest">Sr. José Carlos</span>
            <p className="text-sm text-slate-700 leading-relaxed italic">"Finalmente alguém que fala a nossa língua. Não tem aquelas palavras chatas de computador. Já li e já arrumei as travas do meu banco."</p>
            <div className="text-[9px] text-slate-400 text-right mt-1">16:45 ✓✓</div>
          </div>
        </div>

        {/* WhatsApp Bubble 3 */}
        <div className="flex flex-col items-start translate-x-2">
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md border border-slate-100 relative max-w-[90%]">
            <span className="block text-[10px] font-black text-purple-600 mb-1 uppercase tracking-widest">Dona Helena</span>
            <p className="text-sm text-slate-700 leading-relaxed italic">"Comprei para os meus pais e eles amaram. Design muito limpo e fácil de ler. Nota 10!"</p>
            <div className="text-[9px] text-slate-400 text-right mt-1">19:12 ✓✓</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


// 8. DOBRA – ANCORAGEM DE VALOR
const Value = () => (
  <section className="py-20 px-6 bg-white relative">
    <div className="max-w-3xl mx-auto">
      <SectionTitle title="A decisão mais inteligente que você vai tomar hoje" subtitle="Compare o custo de estar protegido contra o risco real de ser a próxima vítima." />

      <div className="space-y-6">
        {/* Comparison Card 1 */}
        <div className="p-8 rounded-[2.5rem] bg-red-50 border border-red-100 flex items-start gap-4">
          <div className="bg-white p-3 rounded-2xl text-red-600 shadow-sm shrink-0">
            <AlertTriangle size={28} />
          </div>
          <div>
            <h4 className="text-red-900 font-extrabold uppercase tracking-tight text-base mb-2">O Prejuízo de Viver Desprotegido</h4>
            <p className="text-red-800 text-sm leading-relaxed font-medium">Ver as <strong>economias de uma vida sumirem em segundos</strong>, ter o WhatsApp roubado e passar meses tentando provar para o banco que você foi a vítima.</p>
          </div>
        </div>

        {/* Comparison Card 2 */}
        <div className="p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 flex items-start gap-4 shadow-xl shadow-emerald-900/5">
          <div className="bg-white p-3 rounded-2xl text-emerald-600 shadow-sm shrink-0">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h4 className="text-emerald-900 font-extrabold uppercase tracking-tight text-base mb-2">Sua Blindagem Vitalícia Agora</h4>
            <p className="text-emerald-900 text-sm leading-relaxed font-bold">Investir apenas <strong>R$ 47</strong> (menos que um lanche) para ter o conhecimento definitivo que protege o seu dinheiro e o sossego da sua família para sempre.</p>
          </div>
        </div>
      </div>

      <p className="text-center mt-12 text-slate-500 text-xs font-black uppercase tracking-[0.2em] leading-loose">
        O custo do conhecimento é uma pequena taxa única. <br />
        O custo da ignorância pode ser o seu patrimônio.
      </p>
    </div>
  </section>
);

// 9. DOBRA – PREÇO + CTA
// 9. DOBRA – PREÇO + CTA
const Offer = () => (
  <section id="offer" className="py-20 px-6 bg-slate-950 text-white relative">
    <div className="absolute inset-0 bg-emerald-600/5 blur-[100px]"></div>
    <div className="max-w-4xl mx-auto relative z-10">

      <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl text-slate-950">
        <div className="bg-slate-900 p-8 text-center border-b border-white/5">
          <div className="inline-block px-4 py-1.5 bg-amber-500 text-slate-900 rounded-full font-black text-[10px] uppercase mb-4 shadow-lg shadow-amber-500/20">OFERTA ESPECIAL 2026</div>
          <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter">Seu Pacote de Segurança</h3>
        </div>

        <div className="p-8 md:p-12">
          {/* Value Stack */}
          <div className="space-y-4 mb-10">
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-slate-600 font-bold">Ebook Blindagem Digital</span>
              <span className="text-slate-400 font-bold line-through">R$ 97</span>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-slate-600 font-bold">Lista de Golpes 2026</span>
              <span className="text-slate-400 font-bold line-through">R$ 47</span>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-slate-600 font-bold">WhatsApp Sem Travar</span>
              <span className="text-slate-400 font-bold line-through">R$ 53</span>
            </div>
            <div className="pt-2 flex justify-between items-center">
              <span className="text-slate-900 font-black text-lg uppercase tracking-widest italic">Valor Sugerido:</span>
              <span className="text-slate-400 font-black line-through text-lg">R$ 197</span>
            </div>
          </div>

          <div className="text-center mb-10">
            <p className="text-sm font-black text-emerald-600 uppercase mb-2 tracking-widest">Acesso Vitalício Por Apenas</p>
            <div className="flex justify-center items-start gap-1">
              <span className="text-2xl font-black mt-4">R$</span>
              <span className="text-[7rem] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">47</span>
              <div className="flex flex-col items-start mt-4">
                <span className="text-2xl font-black">,00</span>
                <span className="text-slate-400 text-[10px] font-black uppercase">Taxa única</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <a href="https://pay.hotmart.com/T104309163R?off=7o9k0p9q" className="w-full flex justify-center" target="_blank" rel="noopener noreferrer">
              <CTAButton text="Garantir meu acesso" subtext="Inicie sua proteção em menos de 2 minutos" className="w-full" />
            </a>
            <div className="space-y-6 w-full">
              <div className="flex items-center justify-center gap-6 border-t border-slate-100 pt-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8" alt="Mastercard" />
                <div className="flex items-center gap-1">
                  <svg width="65" height="22" viewBox="0 0 132 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9 0L0 12.1L12.1 24.2L24.2 12.1L12.1 0H11.9ZM11.9 33.6L0 45H24.2L11.9 33.6Z" fill="#32BCAD" />
                    <path d="M42.2 11.2V33.8H46.1V25.2H50.8C54.9 25.2 57.9 22.3 57.9 18.2C57.9 14.1 54.9 11.2 50.8 11.2H42.2ZM46.1 14.6H50.6C52.7 14.6 54.1 15.9 54.1 18.2C54.1 20.5 52.7 21.8 50.6 21.8H46.1V14.6ZM63.8 11.2V33.8H67.7V11.2H63.8ZM78.2 11.2L85 20.9L91.8 11.2H96L87.2 23.4L96.3 33.8H92.1L85.1 25.7L78.1 33.8H73.9L83 23.4L74 11.2H78.2Z" fill="#32BCAD" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex items-center justify-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest bg-emerald-50 px-5 py-2 rounded-full border border-emerald-100 shadow-sm">
                  <ShieldCheck size={16} />
                  Sua compra está 100% segura
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                  <Lock size={10} />
                  Ambiente Criptografado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 10. DOBRA – GARANTIA
const Guarantee = () => (
  <section className="py-20 px-6 bg-white relative">
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-8 group">
        <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full animate-pulse"></div>
        <div className="relative z-10 w-full h-full bg-amber-50 rounded-full border-4 border-amber-500 flex items-center justify-center text-amber-600 shadow-xl">
          <div className="flex flex-col items-center leading-none">
            <span className="text-3xl font-black">07</span>
            <span className="text-[10px] font-black uppercase">Dias</span>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">Risco Zero para você</h3>
      <p className="text-slate-600 font-medium leading-relaxed max-w-sm mx-auto">
        Eu confio tanto que este material vai te proteger, que te dou <strong>7 dias de garantia incondicional</strong>. Se você não gostar do conteúdo, basta me mandar um e-mail e eu devolvo cada centavo. Sem perguntas e sem burocracia.
      </p>
    </div>
  </section>
);

// 10. DOBRA – CONVERSA HONESTA
const HonestTalk = () => (
  <section className="py-16 px-6 bg-white">
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <SectionTitle title="Conversa Honesta" subtitle="" />
      <div className="text-lg text-slate-600 leading-relaxed font-medium space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-100">
        <p>"Ninguém no mundo está 100% livre, mas estar preparado reduz drasticamente os riscos."</p>
        <p className="font-black text-slate-900 italic uppercase">Informação certa protege melhor que qualquer antivírus.</p>
        <p>"Estar preparado é muito melhor — e mais barato — do que remediar um prejuízo."</p>
      </div>
    </div>
  </section>
);

// 11. DOBRA – AUTORIDADE
const Authority = () => (
  <section className="py-16 px-6 bg-slate-50">
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center">
      <div className="w-40 h-40 rounded-full bg-slate-200 shrink-0 border-4 border-emerald-500 p-2 overflow-hidden">
        <div className="w-full h-full rounded-full overflow-hidden transition-all duration-700">
          <img
            src="/assets/images/Lucas.png"
            alt="Lucas Rodrigues"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Lucas+Rodrigues&background=059669&color=fff"; }}
          />
        </div>
      </div>
      <div>
        <h4 className="text-emerald-600 font-black uppercase tracking-widest text-[10px] mb-2 italic">Autor do Guia</h4>
        <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Lucas Rodrigues</h3>
        <p className="text-base text-slate-600 leading-relaxed">
          Sou formado em <strong>Análise e Desenvolvimento de Sistemas</strong> e minha missão é traduzir a tecnologia para o seu dia a dia. Acredito que a segurança não precisa ser difícil. Meu foco é criar orientações práticas e humanas para você e sua família.
        </p>
      </div>
    </div>
  </section>
);

// 12. DOBRA – FAQ (DÚVIDAS)
const FAQ = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Dúvidas Comuns" subtitle="Tire suas dúvidas antes de garantir seu acesso." />

        <div className="mt-12 space-y-4">
          <FAQItem
            question="Como eu recebo o ebook?"
            answer="O envio é automático! Assim que o pagamento for aprovado, você recebe o link de acesso no seu e-mail para ler no celular, tablet ou computador."
          />
          <FAQItem
            question="Eu não entendo de tecnologia, vou conseguir?"
            answer="Sim! O guia foi escrito em português simples, sem siglas chatas. É como se eu estivesse aí do seu lado te ensinando."
          />
          <FAQItem
            question="O pagamento é seguro?"
            answer="Totalmente. Usamos uma das maiores plataformas de educação do Brasil. Seus dados estão criptografados e protegidos."
          />
          <FAQItem
            question="Por quanto tempo terei acesso?"
            answer="O acesso é vitalício. Você compra uma vez e pode consultar as orientações sempre que tiver dúvida, para o resto da vida."
          />
        </div>
      </div>
    </section>
  );
};


const Footer = () => (
  <footer className="py-12 px-4 bg-slate-950 text-slate-500 text-center text-xs border-t border-white/5 uppercase tracking-widest font-bold">
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <ShieldCheck size={20} className="text-emerald-500" />
        <span className="text-sm">Blindagem Digital</span>
      </div>
      <p>© 2026 Blindagem Digital. Todos os direitos reservados.</p>
    </div>
  </footer>
);

// --- Main Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-['Inter',_sans-serif] selection:bg-emerald-100 selection:text-emerald-900 antialiased">
      {/* Mobile-centric container */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <PainPoint />
          <SimpleTruth />
          <Learning />
          <Deliverables />
          <InsideLook />
          <Eligibility />
          <Testimonials />
          <Value />
          <Offer />
          <Guarantee />
          <HonestTalk />
          <Authority />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;

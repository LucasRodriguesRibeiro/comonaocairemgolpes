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



// 1. HERO (PRIMEIRA DOBRA)
const Hero = () => (
  <section className="relative pt-16 pb-16 px-6 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
    <div className="absolute top-0 left-0 w-full h-96 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent -z-10"></div>

    <div className="flex flex-col items-center text-center">
      {/* Selo superior */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-emerald-700 font-bold text-[10px] mb-8 uppercase tracking-widest shadow-sm border border-emerald-100">
        🛡️ Proteja seu celular em até 1 hora
      </div>

      {/* HEADLINE PRINCIPAL */}
      <h1 className="text-[2.6rem] font-black leading-[1.1] mb-6 text-slate-900 uppercase tracking-tighter">
        ⚠️ Proteja seu celular <br /> contra golpes <br /> em apenas 1 hora
      </h1>

      {/* SUBHEADLINE */}
      <h2 className="text-xl text-slate-700 mb-6 px-2 leading-tight font-bold max-w-[320px] mx-auto normal-case">
        Um guia simples e direto para evitar golpes de Pix, WhatsApp clonado e fraudes digitais comuns — mesmo que você não entenda de tecnologia.
      </h2>

      {/* TEXTO DE APOIO */}
      <p className="text-sm text-slate-500 mb-10 px-2 leading-relaxed font-semibold max-w-[280px] mx-auto">
        Evite prejuízos financeiros e proteja seu dinheiro, seu WhatsApp e sua família agora.
      </p>

      {/* ELEMENTOS VISUAIS DA DOBRA */}
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
              if (parent) parent.innerHTML = '<div class="bg-slate-900 aspect-[4/3] rounded-[2rem] flex items-center justify-center text-emerald-500 font-black italic text-center p-6">PROJETO <br/> BLINDAGEM DIGITAL</div>';
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

// 2. DOBRA – PEDRA NO SAPATO (IDENTIFICAÇÃO COM A DOR)
const PainPoint = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto">
      <SectionTitle
        title="⚠️ Os golpes começam assim — pelo seu celular"
        subtitle=""
      />

      <p className="text-lg text-slate-600 mb-10 text-center leading-relaxed font-medium">
        Hoje, os golpistas não precisam mais arrombar portas. <br />
        Eles entram quando você está distraído, com pressa ou tentando ajudar alguém.
      </p>

      <p className="text-sm text-slate-400 font-bold uppercase tracking-wider text-center mb-8">
        Normalmente começa em situações comuns como estas:
      </p>

      <div className="grid grid-cols-1 gap-6">
        {/* CARD 1 */}
        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left transition-all hover:shadow-md">
          <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl shrink-0">
            <Smartphone size={32} />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3 flex items-center justify-center md:justify-start gap-2">
              📱 Mensagem no WhatsApp
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Você recebe uma mensagem dizendo: <br />
              <span className="text-slate-900 italic">“Pai, troquei de número. Preciso de ajuda agora.”</span>
            </p>
            <p className="text-slate-500 text-sm mt-3 font-bold">
              Na pressa, você responde… e o golpe já começou.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left transition-all hover:shadow-md">
          <div className="bg-amber-50 text-amber-600 p-4 rounded-2xl shrink-0">
            <CreditCard size={32} />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3 flex items-center justify-center md:justify-start gap-2">
              💸 Pix de “Urgência”
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Uma história triste, um pedido desesperado e a pressão para agir rápido.
            </p>
            <p className="text-slate-500 text-sm mt-3 font-bold">
              Você faz o Pix — e o dinheiro some.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left transition-all hover:shadow-md">
          <div className="bg-blue-50 text-blue-500 p-4 rounded-2xl shrink-0">
            <MousePointerClick size={32} />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3 flex items-center justify-center md:justify-start gap-2">
              🎁 Promoção Boa Demais
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Um produto muito barato, um site bonito e a promessa de vantagem rápida.
            </p>
            <p className="text-slate-500 text-sm mt-3 font-bold">
              Depois do pagamento, a conta bancária é esvaziada.
            </p>
          </div>
        </div>
      </div>

      {/* FRASE DE IMPACTO FINAL */}
      <div className="mt-16 p-10 rounded-[3rem] bg-slate-950 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <ShieldAlert size={120} />
        </div>
        <p className="relative z-10 text-white font-black italic text-2xl md:text-3xl leading-tight uppercase tracking-tighter">
          “Isso pode acontecer comigo <br /> ou com alguém que eu amo — hoje.”
        </p>
      </div>
    </div>
  </section>
);

// 3. DOBRA – TRANSIÇÃO DOR → SOLUÇÃO (A VERDADE SIMPLES)
const SimpleTruth = () => (
  <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
    {/* Efeito sutil de profundidade */}
    <div className="absolute inset-0 bg-emerald-900/10 blur-[120px] -z-0"></div>

    <div className="max-w-3xl mx-auto relative z-10 text-center">
      <h2 className="text-3xl md:text-4xl font-black mb-10 uppercase tracking-tighter italic">
        A verdade é simples
      </h2>

      <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">
        <p>
          Os golpes ficaram cada vez mais sofisticados. <br />
          Hoje, os criminosos usam mensagens, sites e contatos que parecem 100% reais.
        </p>

        <p className="font-medium">
          Mesmo pessoas atentas, cuidadosas e honestas estão caindo.
        </p>

        {/* FRASE DE DESTAQUE */}
        <div className="py-8 my-10 border-y border-white/5">
          <p className="text-3xl md:text-5xl font-black text-emerald-400 uppercase tracking-tight leading-none italic">
            Isso não é falta <br /> de inteligência.
          </p>
        </div>

        <div className="space-y-6">
          <p>
            Ninguém te ensinou o que observar. <br />
            Ninguém explicou os sinais certos para identificar um golpe a tempo.
          </p>

          <p className="text-white font-bold bg-white/5 py-4 px-6 rounded-2xl inline-block border border-white/10">
            O problema não é você. <br />
            É a falta de uma orientação simples, clara e em português direto.
          </p>
        </div>

        <p className="text-emerald-500 font-black uppercase tracking-widest text-sm pt-8 animate-pulse">
          E é exatamente isso que você vai ter a partir de agora.
        </p>
      </div>
    </div>
  </section>
);

// 4. DOBRA – O QUE VOCÊ PASSA A CONSEGUIR FAZER
const Learning = () => (
  <section className="py-24 px-4 bg-slate-50">
    <div className="max-w-4xl mx-auto">
      <SectionTitle
        title="O que você passa a conseguir fazer"
        subtitle="Pequenas ações que mudam completamente a sua segurança no celular."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {[
          { title: "Reconhecer golpes em segundos", desc: "Mesmo quando a mensagem parece verdadeira." },
          { title: "Evitar Pix fraudado", desc: "Identificando pedidos falsos antes de agir." },
          { title: "Proteger seu WhatsApp", desc: "Contra clonagem e acessos indevidos." },
          { title: "Comprar online com mais segurança", desc: "Sem cair em promoções falsas." },
          { title: "Saber exatamente o que fazer se algo der errado", desc: "Sem pânico e sem perder tempo." },
          { title: "Blindar seus aplicativos de banco", desc: "Com configurações simples e eficazes." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl flex items-start gap-4 shadow-sm border border-slate-100">
            <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-full shrink-0">
              <CheckCircle size={20} />
            </div>
            <div>
              <h4 className="font-black text-slate-800 text-base leading-tight">{item.title}</h4>
              <p className="text-slate-500 text-sm mt-1 font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-600 font-bold leading-relaxed max-w-2xl mx-auto italic">
          Essas ações não exigem conhecimento técnico nem aplicativos complicados. <br />
          São cuidados simples que qualquer pessoa consegue aplicar em menos de 1 hora.
        </p>
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

// 5. DOBRA – O QUE VOCÊ PASSA A DOMINAR (VISÃO INTERNA)
const InsideLook = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto">
      <SectionTitle
        title="O que você passa a dominar por dentro"
        subtitle="Não é teoria e não é curso. São ações práticas para você assumir o controle da sua segurança digital em pouco tempo."
      />

      <div className="mt-12 space-y-4">
        {[
          { cap: "01", title: "O olhar do golpista", desc: "Você passa a identificar rapidamente quem é alvo fácil e como tirar seu nome dessa lista." },
          { cap: "02", title: "Blindagem anti-clone", desc: "Configurações simples que dificultam ao máximo a clonagem do seu WhatsApp — mesmo em erros comuns." },
          { cap: "03", title: "Banco à prova de Pix", desc: "Ajustes práticos no celular que criam uma barreira contra transferências indevidas." },
          { cap: "04", title: "Detector de fraudes", desc: "Um checklist rápido para saber, em poucos segundos, se um anúncio, site ou mensagem é golpe." }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 items-center hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black italic shrink-0 shadow-lg text-lg">
              {item.cap}
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 uppercase text-xs mb-1 tracking-wider">{item.title}</h4>
              <p className="text-slate-600 text-[13px] leading-relaxed font-bold">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-500 font-bold italic text-sm">
          Tudo explicado em português claro, <br />
          sem termos técnicos e sem complicação.
        </p>
      </div>
    </div>
  </section>
);


// 6. DOBRA – PARA QUEM É / PARA QUEM NÃO É
const Eligibility = () => (
  <section className="py-20 px-6 bg-slate-50">
    <div className="max-w-4xl mx-auto flex flex-col gap-10">
      {/* É PARA VOCÊ SE */}
      <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
        <h3 className="text-2xl font-black text-emerald-600 mb-8 uppercase tracking-tighter italic flex items-center gap-3">
          <CheckCircle2 className="shrink-0" size={28} />
          É para você se:
        </h3>
        <ul className="space-y-6">
          {[
            "Já ficou inseguro ao receber mensagem ou ligação de número desconhecido.",
            "Usa Pix, mas sempre confere tudo duas ou três vezes com medo de errar.",
            "Tem receio de clicar em links, anúncios ou promoções na internet.",
            "Quer proteger seus pais, filhos ou netos de golpes digitais.",
            "Prefere prevenir do que correr atrás do prejuízo depois."
          ].map((text, i) => (
            <li key={i} className="flex gap-4 items-start text-slate-700 font-bold leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* NÃO É PARA VOCÊ SE */}
      <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl text-white">
        <h3 className="text-2xl font-black text-red-400 mb-8 uppercase tracking-tighter italic flex items-center gap-3">
          <AlertTriangle className="shrink-0" size={28} />
          NÃO é para você se:
        </h3>
        <ul className="space-y-6">
          {[
            "Acha que nunca vai cair em golpe.",
            "Gosta de arriscar e “ver no que dá”.",
            "Procura algo técnico, cheio de termos complicados."
          ].map((text, i) => (
            <li key={i} className="flex gap-4 items-start text-slate-400 font-bold leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Frase de Fechamento */}
      <div className="text-center mt-6">
        <p className="text-slate-600 font-black italic text-lg uppercase tracking-tight">
          Se você se identificou com 2 ou mais itens acima, <br />
          <span className="text-emerald-600">este guia foi feito para você.</span>
        </p>
      </div>
    </div>
  </section>
);

// 7. DOBRA – QUEM JÁ SE PROTEGEU (PROVA SOCIAL)
const Testimonials = () => (
  <section className="py-20 px-6 bg-emerald-50">
    <div className="max-w-4xl mx-auto">
      <SectionTitle
        title="Quem já se protegeu com o guia"
        subtitle="Veja o que pessoas comuns estão dizendo depois de aplicar o conteúdo no próprio celular."
      />

      <div className="space-y-6 mt-12 px-2">
        {/* WhatsApp Bubble 1 */}
        <div className="flex flex-col items-start translate-x-[-8px]">
          <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-md border border-slate-100 relative max-w-[90%]">
            <span className="block text-[10px] font-black text-emerald-600 mb-1 uppercase tracking-widest">Dona Maria Rita</span>
            <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
              “Lucas, querido! O guia é maravilhoso. Consegui travar meu WhatsApp do jeito que você explicou e já me sinto muito mais <strong>segura</strong> no dia a dia. Obrigada!”
            </p>
            <div className="text-[10px] text-slate-400 text-right mt-2 flex items-center justify-end gap-1">
              14:20 <span className="text-blue-500 text-xs">✓✓</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Bubble 2 */}
        <div className="flex flex-col items-start translate-x-4">
          <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-md border border-slate-100 relative max-w-[90%]">
            <span className="block text-[10px] font-black text-blue-600 mb-1 uppercase tracking-widest">Sr. José Carlos</span>
            <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
              “Finalmente alguém que fala a nossa língua. Nada de palavras difíceis. <strong>Em poucos minutos</strong> já arrumei as travas do meu banco.”
            </p>
            <div className="text-[10px] text-slate-400 text-right mt-2 flex items-center justify-end gap-1">
              16:45 <span className="text-blue-500 text-xs">✓✓</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Bubble 3 */}
        <div className="flex flex-col items-start translate-x-2">
          <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-md border border-slate-100 relative max-w-[90%]">
            <span className="block text-[10px] font-black text-purple-600 mb-1 uppercase tracking-widest">Dona Helena</span>
            <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
              “Comprei para meus pais e eles amaram. Muito <strong>fácil</strong> de ler, tudo bem explicado. Nota 10!”
            </p>
            <div className="text-[10px] text-slate-400 text-right mt-2 flex items-center justify-end gap-1">
              19:12 <span className="text-blue-500 text-xs">✓✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


// 8. DOBRA – ANCORAGEM DE VALOR
const Value = () => (
  <section className="py-20 px-6 bg-white relative">
    <div className="max-w-4xl mx-auto">
      <SectionTitle
        title="A decisão mais inteligente de hoje"
        subtitle="Compare o custo de se proteger agora com o prejuízo real de cair em um golpe."
      />

      <div className="space-y-6">
        {/* Bloco 1 – Prejuízo Real */}
        <div className="p-8 rounded-[2.5rem] bg-red-50 border border-red-100 flex items-start gap-4">
          <div className="bg-white p-3 rounded-2xl text-red-600 shadow-sm shrink-0">
            <AlertTriangle size={28} />
          </div>
          <div>
            <h4 className="text-red-900 font-extrabold uppercase tracking-tight text-base mb-3 italic">🔺 O prejuízo de ficar desprotegido</h4>
            <div className="text-red-800 text-sm leading-relaxed font-medium space-y-2">
              <p>Perder dinheiro em segundos. <br /> Ter o WhatsApp clonado. <br /> Passar semanas tentando provar ao banco que você foi vítima de um golpe.</p>
              <p className="font-black pt-2 uppercase text-[10px] tracking-wider">O prejuízo não é só financeiro. É emocional também.</p>
            </div>
          </div>
        </div>

        {/* Bloco 2 – Proteção */}
        <div className="p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 flex items-start gap-4 shadow-xl shadow-emerald-900/5 transition-transform hover:scale-[1.01]">
          <div className="bg-white p-3 rounded-2xl text-emerald-600 shadow-sm shrink-0">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h4 className="text-emerald-900 font-extrabold uppercase tracking-tight text-base mb-3 italic">🛡️ Sua blindagem digital agora</h4>
            <div className="text-emerald-900 text-sm leading-relaxed font-bold space-y-2">
              <p>Investimento único de <strong>R$ 47</strong> <br /> — menos que um lanche.</p>
              <p>Para ter acesso imediato a um guia simples que protege seu dinheiro, seu WhatsApp e traz tranquilidade para sua família.</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-12 text-slate-500 text-xs font-black uppercase tracking-[0.2em] leading-loose">
        O custo do conhecimento é pago uma vez. <br />
        <span className="text-red-600/70">O prejuízo de um golpe pode durar anos.</span>
      </p>
    </div>
  </section>
);

// 9. DOBRA FINAL – PREÇO + CTA
const Offer = () => (
  <section id="offer" className="py-20 px-6 bg-slate-950 text-white relative">
    <div className="absolute inset-0 bg-emerald-600/5 blur-[100px]"></div>
    <div className="max-w-4xl mx-auto relative z-10">

      <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl text-slate-950">
        <div className="bg-slate-900 p-8 text-center border-b border-white/5">
          <div className="inline-block px-4 py-1.5 bg-amber-500 text-slate-900 rounded-full font-black text-[10px] uppercase mb-4 shadow-lg shadow-amber-500/20">🔥 Oferta especial 2026</div>
          <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter">Seu pacote de proteção agora</h3>
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
            <p className="text-sm font-black text-emerald-600 uppercase mb-2 tracking-widest">Acesso vitalício por apenas</p>
            <div className="flex justify-center items-start gap-1">
              <span className="text-2xl font-black mt-4">R$</span>
              <span className="text-[7rem] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">47</span>
              <div className="flex flex-col items-start mt-4">
                <span className="text-2xl font-black">,00</span>
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Pagamento único</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs font-bold mt-4">Comece a se proteger agora, em menos de 2 minutos.</p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <a href="https://pay.hotmart.com/T104309163R?off=7o9k0p9q" className="w-full flex justify-center" target="_blank" rel="noopener noreferrer">
              <CTAButton text="🟢 Começar minha proteção agora" subtext="Acesso imediato e vitalício" className="w-full" />
            </a>

            {/* Microgarantias */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                <CheckCircle size={14} className="text-emerald-500" /> Acesso imediato
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                <CheckCircle size={14} className="text-emerald-500" /> Sem mensalidade
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                <CheckCircle size={14} className="text-emerald-500" /> Uso simples e prático
              </div>
            </div>

            <div className="space-y-6 w-full pt-4">
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

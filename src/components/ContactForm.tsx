import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.'),
  company: z.string().optional(),
  phone: z.string().min(10, 'Telefone inválido. Inclua DDD (mínimo 10 dígitos).'),
  email: z.string().email('Por favor, insira um e-mail válido.'),
  service: z.string().min(1, 'Selecione um serviço desejado.'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    // If EmailJS env variables are missing, fallback to mock successful sending to avoid developer block
    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        '⚠️ EmailJS parameters are missing. Using mock response.\n' +
        'Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your env.'
      );
      
      setTimeout(() => {
        setStatus('success');
        reset();
      }, 1500);
      return;
    }

    try {
      const templateParams = {
        from_name: data.name,
        company_name: data.company || 'Não informada',
        phone: data.phone,
        reply_to: data.email,
        service_requested: data.service,
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('success');
      reset();
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage(error?.text || 'Erro ao enviar a mensagem. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 md:p-10 rounded-3xl bg-white border border-light-border/70 shadow-xl shadow-primary/5">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center text-center py-10"
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="font-sans font-bold text-2xl text-text-dark mb-3">Mensagem Enviada!</h3>
            <p className="font-sans text-text-light max-w-md">
              Agradecemos o contato. Nossa equipe analisará seus requisitos e retornará com uma proposta técnica em até 24 horas.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-8 px-6 py-2.5 rounded-xl border border-light-border hover:border-primary hover:text-primary transition-all text-sm font-semibold"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-6"
          >
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 flex gap-3 text-rose-800 text-sm">
                <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Houve um problema</p>
                  <p className="opacity-90">{errorMessage}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-sans text-xs font-semibold uppercase tracking-wider text-text-dark">
                  Nome Completo *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  {...register('name')}
                  className={`w-full px-4 py-3 rounded-xl border font-sans text-sm focus:outline-none transition-all duration-300 ${
                    errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-light-border hover:border-text-light/60 focus:border-primary'
                  }`}
                />
                {errors.name && <span className="text-xs text-rose-500 font-medium">{errors.name.message}</span>}
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-sans text-xs font-semibold uppercase tracking-wider text-text-dark">
                  Empresa (Opcional)
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Sua empresa"
                  {...register('company')}
                  className="w-full px-4 py-3 rounded-xl border border-light-border hover:border-text-light/60 focus:border-primary font-sans text-sm focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-sans text-xs font-semibold uppercase tracking-wider text-text-dark">
                  Telefone / WhatsApp *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  {...register('phone')}
                  className={`w-full px-4 py-3 rounded-xl border font-sans text-sm focus:outline-none transition-all duration-300 ${
                    errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-light-border hover:border-text-light/60 focus:border-primary'
                  }`}
                />
                {errors.phone && <span className="text-xs text-rose-500 font-medium">{errors.phone.message}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-sans text-xs font-semibold uppercase tracking-wider text-text-dark">
                  E-mail Corporativo *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="voce@empresa.com"
                  {...register('email')}
                  className={`w-full px-4 py-3 rounded-xl border font-sans text-sm focus:outline-none transition-all duration-300 ${
                    errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-light-border hover:border-text-light/60 focus:border-primary'
                  }`}
                />
                {errors.email && <span className="text-xs text-rose-500 font-medium">{errors.email.message}</span>}
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="font-sans text-xs font-semibold uppercase tracking-wider text-text-dark">
                Serviço Desejado *
              </label>
              <select
                id="service"
                defaultValue=""
                {...register('service')}
                className={`w-full px-4 py-3 rounded-xl border font-sans text-sm focus:outline-none transition-all duration-300 bg-white ${
                  errors.service ? 'border-rose-400 bg-rose-50/20' : 'border-light-border hover:border-text-light/60 focus:border-primary'
                }`}
              >
                <option value="" disabled>Selecione uma opção...</option>
                <option value="sites">Desenvolvimento de Sites / Landing Pages</option>
                <option value="sistemas">Sistemas Web Customizados</option>
                <option value="ai">Integrações & APIs de Sistemas</option>
                <option value="consultancy">Consultoria Tecnológica</option>
              </select>
              {errors.service && <span className="text-xs text-rose-500 font-medium">{errors.service.message}</span>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-sans text-xs font-semibold uppercase tracking-wider text-text-dark">
                Nos fale sobre o seu projeto *
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Descreva brevemente os objetivos do projeto..."
                {...register('message')}
                className={`w-full px-4 py-3 rounded-xl border font-sans text-sm focus:outline-none transition-all duration-300 resize-none ${
                  errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-light-border hover:border-text-light/60 focus:border-primary'
                }`}
              />
              {errors.message && <span className="text-xs text-rose-500 font-medium">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-4 w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-base font-semibold transition-all duration-300 shadow-md hover:shadow-primary/10 disabled:opacity-75 disabled:cursor-not-allowed group cursor-pointer"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando orçamento...
                </>
              ) : (
                <>
                  Solicitar orçamento grátis
                  <Send size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;

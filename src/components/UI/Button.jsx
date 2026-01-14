import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    className,
    onClick,
    type = 'button',
    ...props
}) => {
    const baseStyles = "px-6 py-2.5 rounded-lg font-medium transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-[var(--color-brand-primary)] text-white hover:brightness-110 shadow-md hover:shadow-lg focus:ring-[var(--color-brand-primary)]",
        secondary: "bg-[var(--color-brand-secondary)] text-[var(--color-brand-primary)] border-2 border-[var(--color-brand-primary)] hover:bg-blue-50 focus:ring-[var(--color-brand-primary)]",
        accent: "bg-[var(--color-brand-accent)] text-white hover:brightness-110 shadow-md hover:shadow-lg focus:ring-[var(--color-brand-accent)]",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white",
        ghost: "bg-transparent text-[var(--color-text-secondary)] hover:bg-gray-100 hover:text-[var(--color-brand-primary)]"
    };

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type={type}
            className={twMerge(baseStyles, variants[variant], className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;

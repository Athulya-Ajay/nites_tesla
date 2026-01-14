import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, hoverEffect = true, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" } : {}}
            className={twMerge(
                "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-6 transition-colors",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;

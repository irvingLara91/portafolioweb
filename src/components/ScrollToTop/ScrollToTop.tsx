import { useEffect, useCallback, RefObject } from 'react';
import { useLocation } from 'react-router-dom';

// ============================================================
// 1. Definición de props con TypeScript
// ============================================================
interface ScrollToTopProps {
    /**
     * Si el scroll debe ser suave (comportamiento 'smooth').
     * @default true
     */
    smooth?: boolean;

    /**
     * Si debe hacer scroll a un elemento con hash (#id) si existe en la URL.
     * @default true
     */
    scrollToHash?: boolean;

    /**
     * Lista de rutas (o inicios de ruta) donde NO se debe hacer scroll automático.
     * Ejemplo: ['/admin', '/dashboard']
     * @default []
     */
    excludePaths?: string[];

    /**
     * Referencia a un contenedor interno (ej. un div con overflow: auto)
     * en lugar de usar window.
     * @default null
     */
    containerRef?: RefObject<HTMLElement | null>;
}

// ============================================================
// 2. Componente tipado
// ============================================================
const ScrollToTop: React.FC<ScrollToTopProps> = ({
                                                     smooth = true,
                                                     scrollToHash = true,
                                                     excludePaths = [],
                                                     containerRef = null,
                                                 }) => {
    const { pathname, hash } = useLocation();

    // ============================================================
    // 3. Función de scroll con tipado seguro
    // ============================================================
    const performScroll = useCallback((): void => {
        // Verificar si la ruta actual debe ser excluida
        if (excludePaths.some((path) => pathname.startsWith(path))) {
            return;
        }

        // Determinar el objetivo del scroll (window o contenedor)
        const target: Window | HTMLElement | null = containerRef?.current || window;

        // Si no hay target válido, salir
        if (!target) return;

        // ============================================================
        // 4. Scroll a hash (#id) si existe
        // ============================================================
        if (scrollToHash && hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({
                    behavior: smooth ? 'smooth' : 'auto',
                    block: 'start',
                });
                return;
            }
        }

        // ============================================================
        // 5. Scroll al inicio (window o contenedor)
        // ============================================================
        // Verificar si el target tiene el método scrollTo
        const canScroll = target && typeof target === 'object' && 'scrollTo' in target;

        if (canScroll) {
            // Type guard: aseguramos que target tiene scrollTo
            (target as Window | HTMLElement).scrollTo({
                top: 0,
                left: 0,
                behavior: smooth ? 'smooth' : 'auto',
            });
        }
    }, [pathname, hash, smooth, scrollToHash, excludePaths, containerRef]);

    // ============================================================
    // 6. Efecto con limpieza
    // ============================================================
    useEffect(() => {
        // Pequeño delay para asegurar que el DOM esté actualizado
        const timer: ReturnType<typeof setTimeout> = setTimeout(performScroll, 50);
        return () => clearTimeout(timer);
    }, [performScroll]);

    return null;
};

export default ScrollToTop;
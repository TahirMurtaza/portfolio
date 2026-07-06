const icons = [
    { className: "fab fa-python",   top: "12%", left: "6%",  size: 52, duration: 7,   delay: 0 },
    { className: "fab fa-react",    top: "70%", left: "10%", size: 60, duration: 9,   delay: 1.2 },
    { className: "fab fa-aws",      top: "28%", left: "16%", size: 46, duration: 8,   delay: 2.4 },
    { className: "fas fa-robot",    top: "58%", left: "3%",  size: 40, duration: 6.5, delay: 0.8 },
    { className: "fab fa-node-js",  top: "85%", left: "28%", size: 44, duration: 7.5, delay: 1.8 },
    { className: "fas fa-brain",    top: "8%",  left: "30%", size: 38, duration: 8.5, delay: 3 },
    { className: "fab fa-angular",  top: "20%", left: "88%", size: 48, duration: 7,   delay: 0.5 },
    { className: "fab fa-js",       top: "48%", left: "94%", size: 42, duration: 9.5, delay: 2 },
    { className: "fab fa-docker",   top: "76%", left: "86%", size: 54, duration: 8,   delay: 1 },
    { className: "fas fa-database", top: "90%", left: "64%", size: 36, duration: 7,   delay: 2.6 },
    { className: "fab fa-github",   top: "6%",  left: "70%", size: 40, duration: 6.8, delay: 1.5 },
    { className: "fas fa-microchip", top: "40%", left: "45%", size: 34, duration: 9,  delay: 0.3 },
];

const FloatingIcons = () => {
    return (
        <div className="floating-icons" aria-hidden="true">
            {icons.map((icon, i) => (
                <i
                    key={i}
                    className={icon.className}
                    style={{
                        top: icon.top,
                        left: icon.left,
                        fontSize: `${icon.size}px`,
                        animationDuration: `${icon.duration}s`,
                        animationDelay: `${icon.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingIcons;

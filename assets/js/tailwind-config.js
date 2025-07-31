tailwind.config = {
    darkMode: 'class',
    theme: {
        fontFamily: {
            'sans': ['Ubuntu', 'sans-serif'],
            'title': ['Space Grotesk', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#3B82F6',
                secondary: '#7C3AED',
                dark: '#1a1a1a',
                darker: '#121212',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-reverse': 'float-reverse 5s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'float-reverse': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(20px)' },
                },
            }
        }
    }
}
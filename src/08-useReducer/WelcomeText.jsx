
export const WelcomeText = () => {


    const getSaludo=(name='Edwin')=> {
        const hora = new Date().getHours();
        let saludo = '';

        if (hora >= 6 && hora < 12) {
            saludo = 'Buenos días';
        } else if (hora >= 12 && hora < 18) {
            saludo = 'Buenas tardes';
        } else {
            saludo = 'Buenas noches';
        }

        return <p className="animate-fade-up animate-once animate-ease-in-out animate-delay-100 text-md md:text-xl font-normal  text-white drop-shadow-2xl w-full">{saludo}, {name} 👋🏼</p>;
    }

  return (getSaludo())
}

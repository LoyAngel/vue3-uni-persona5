# Persona5 Sytle Uniapp Project

## Project introduction
This is a project that imitates the style of the game Persona5. It contains the walkthrough of the game and persona caculator functions. The project is developed using the uniapp framework.
## Project structure
```
> src
  > components (Contains the components of the project)
    ~ components.d.ts (Type declaration file for components)
  > pages (Contains the pages of the project)
    > index (Folder for the home page)
      > components (Components of the home page)
        ~ indexBackground.vue (Background component of the home page)
        ~ indexCategory.vue (Category component of the home page)
        ~ indexNavbar.vue (Navbar component of the home page)
        ~ indexSwiper.vue (Swiper component of the home page)
      ~ index.vue (Home page)
    > login (Folder for the login page)
      ~ login.vue (Login page)
    > my (Folder for the personal center page)
      ~ my.vue (Personal center page)
    > persona (Folder for the Persona page)
      > components (Components of the Persona page)
        ~ searchNavbar.vue (Search navbar component)
      ~ persona.vue (Persona page)
  > services (Contains the services of the project)
    ~ index.ts (Entry file for services)
  > stores (Contains the state management of the project)
    ~ index.ts (Entry file for state management)
    > module (Contains specific state modules)
  > static (Contains static resources)
  > types (Contains the type declarations of the project)
    ~ global.d.ts (Global type declarations)
    ~ home.d.ts (Home page type declarations)
    ~ http.d.ts (HTTP request type declarations)
  > utils (Contains the utility functions of the project)
    ~ http.ts (HTTP request utility functions)
```
## TODO
2025.1.16
- Tabbar animation
- Walkthrough page
- Data storage (2025.1.22) √
## Credits
Ideas, logics, data, etc. have been gatherd from:
- [Persona5 calculator](https://github.com/chinhodado/persona5_calculator)
- [Persona5 font generator](https://github.com/LzxHahaha/persona5)
- [Bilibiliwiki Persona5](https://wiki.biligame.com/persona/P5R%E6%94%BB%E7%95%A5%E4%B8%93%E5%8C%BA)

<font size=4>**Any infringement of your rights, please contact me, I will delete it as soon as possible.**</font>
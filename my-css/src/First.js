import React from 'react'
import classes from './first.module.css'
import { Helmet } from "react-helmet"


const First = () => {

    return (
        <div>
            <Helmet>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

            </Helmet>
            <header className={classes.header}>

                <a href='#'>  Thapa tecvhnival</a>
                <nav className={classes.navbar}>
                    <ul className={classes.navlist}>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Home</a></li>
                    </ul>
                </nav>
                <div>
                    <ion-icon name="menu-outline"></ion-icon>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </header>
            <main>
                <section className={classes.section}>
                    <div className={classes.container}>
                        <div className={classes.hero_data}>
                            <h1 className={classes.primary_hending}>fdfdfd ffdefdfd</h1>
                            <p className={classes.para}>fffdf fdfdfdfdf ffdfdf gffdfgh
                                ffdfdg gghthtgfgtrgf freerfe
                            </p>
                            <a href='#'>Get Started</a>
                            <div className={classes.hero_icon}>
                                <div>
                                    <div className={classes.hero_icon_style}>
                                        <ion-icon name="logo-react"></ion-icon>

                                        <h1>Write code</h1>
                                        <p>far far away behund gfgfgfg ghgh jhj jjj
                                            fgfgf
                                        </p>
                                    </div>
                                    <div className={classes.hero_icon_style}>
                                        <ion-icon name="logo-react"></ion-icon>

                                        <h1>Write code</h1>
                                        <p>far far away behund gfgfgfg ghgh jhj jjj
                                            fgfgf
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.hero_image}>
                            <img
                                src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
                                
                            />
                            <div className={classes.hero_img_overlay}>
                                <p className={classes.para}>
                                    dfwer fef  fgfg hgghfgh gffgf hfhfh gghthtgfgtrgf
                                    fgfg  fh    ghgh  ghghg  ghgh hggh ghgh
                                    ggfg ff
                                </p>
                                <p className={classes.class}>Thapa technical </p>
                                <p className={classes.class}> mearn stack </p>

                            </div>
                        </div>
                    </div>

                </section>
            </main>

        </div>

    )

}
export default First;
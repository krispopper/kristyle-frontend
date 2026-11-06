
import "./LoginForm.css";
import {
    UsersRound,
    Zap,
    MessageCircle,
    Mail,
    LockKeyhole,
    Eye,
    ArrowRight,
    Sparkles
} from "lucide-react";

import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <div className="login-layout">

            <section className="section section-brand">
                <div className="logo">
                    <div className="logo-icon">
                        <Zap size={23} fill="currentColor" />
                    </div>
                    <span>Kristyle</span>
                </div>

                <div className="brand-content">
                    <span className="brand-badge">
                        <Sparkles size={15} />
                        TU ESPACIO, TU COMUNIDAD
                    </span>

                    <h1 className="text-presentation">
                        Conecta, comparte,
                        <span> crea tu espacio.</span>
                    </h1>

                    <p className="login-brand">
                        Una comunidad donde tus ideas,
                        experiencias y personas favoritas
                        se encuentran.
                    </p>

                    <div className="brand-features">
                        <div className="feature-icon">
                            <UsersRound size={20} />
                        </div>
                        <div className="feature-icon">
                            <MessageCircle size={20} />
                        </div>
                        <div className="feature-icon">
                            <Zap size={20} />
                        </div>
                        <span>Conecta con lo que te inspira</span>
                    </div>
                </div>

                <div className="brand-footer">
                    Un lugar para ser tú mismo.
                </div>
            </section>

            <section className="section section-form">
                <div className="mobile-logo">
                    <Zap size={20} />
                    Kristyle
                </div>

                <div className="form-content">
                    <div className="form-heading">
                        <span className="welcome-label">
                            BIENVENIDO DE NUEVO
                        </span>
                        <h2>Qué bueno verte.</h2>
                        <p>
                            Entra a tu cuenta y sigue conectado
                            con tu comunidad.
                        </p>
                    </div>

                    <form className="login-form">
                        <div className="form-field">
                            <label htmlFor="email">
                                Correo electrónico
                            </label>

                            <div className="input-wrapper">
                                <Mail size={19} />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="tu@correo.com"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-field">
                            <div className="password-label">
                                <label htmlFor="password">
                                    Contraseña
                                </label>

                                <a href="/forgot-password">
                                    ¿La olvidaste?
                                </a>
                            </div>

                            <div className="input-wrapper">
                                <LockKeyhole size={19} />
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Tu contraseña"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="login-button">
                            Iniciar sesión
                            <ArrowRight size={19} />
                        </button>
                    </form>

                    <div className="account-links">
                        <p>
                            ¿Todavía no tienes cuenta?
                            <Link to="/register"> Crear cuenta</Link>
                        </p>

                        <Link
                            className="activation-link"
                            a="/activate-account"
                        >
                            ¿Necesitas activar tu cuenta?
                        </Link>
                    </div>
                </div>

                <div className="form-footer">
                    Al continuar, aceptas nuestros términos
                    y nuestra política de privacidad.
                </div>
            </section>
        </div>
    );
}

export default LoginForm;

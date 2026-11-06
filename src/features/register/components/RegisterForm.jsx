import "./RegisterForm.css";
import { Zap, Sparkles, UsersRound, MessageCircle } from "lucide-react";
import {Link} from "react-router-dom"
function RegisterForm() {
  return (
    <div className="form-container">
      <section className="section info">
        <div className="logo">
          <div className="logo-icon">
            <Zap size={23} fill="currentColor" />
          </div>
          <span className="name-app">Kristyle</span>
        </div>
        <div className="community-announcement">
          <Sparkles />
          <span>ÚNETE A NUESTRA COMUNIDAD</span>
        </div>
        <div className="community-message">
          <h1>Crea tu cuenta, forma parte de</h1>
          <span>algo increíble.</span>
        </div>
        <div className="community-description">
          <p>Conecta con personas, comparte</p>
          <p>tus ideas y descubre un mundo </p>
          <p>de posibilidades.</p>
        </div>
        <div className="items-social-network-container">
          <UsersRound className="item-social-network" />
          <MessageCircle className="item-social-network" />
          <Zap className="item-social-network" />
        </div>
        <div></div>
        <div className="community-description-two-container">
          <span>construyamos juntos una comunidad</span>
          <span>más activa y creativa.</span>
        </div>
        <span className="end-text-banner">Un lugar para ser tú mismo.</span>
      </section>
      <section className="section register">
        <span className="title-form">REGÍSTRATE</span>
        <h1>¡Bienvenido!</h1>
        <p>Completa tus datos y comienza tu experiencia.</p>
        <form action="" className="register-form">
          <div className="input-form">
            <label htmlFor="">Primer nombre</label>
            <input type="text" placeholder="Tu primer nombre" />
          </div>
          <div className="input-form">
            <label htmlFor="">Segundo nombre</label>
            <input type="text" placeholder="Tu segundo nombre" />
          </div>
          <div className="input-form">
            <label htmlFor="">Apellido</label>
            <input type="text" placeholder="Tu apellido" />
          </div>
          <div className="input-form">
            <label htmlFor="">Correo electrónico</label>
            <input type="text" placeholder="Correo Electrónico" />
          </div>
          <div className="input-form">
            <label htmlFor="">Contraseña</label>
            <input type="password" placeholder="Crea una contraseña" />
          </div>
          <button>
            Crear cuenta
          </button>
        </form>
        <div className="login-link">
            <span>¿Ya tienes una cuenta?</span>
            <Link to="/login">Inicia sesión</Link>
        </div>
      </section>
    </div>
  );
}

export default RegisterForm;

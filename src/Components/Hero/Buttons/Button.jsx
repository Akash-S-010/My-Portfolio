import './Button.css'

function Button() {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default Button

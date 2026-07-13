
function NoxLogo() {
  return (
    <svg width="160" height="100" viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gWord" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A89845" />
          <stop offset="100%" stopColor="#6B0F1A" />
        </linearGradient>
        <linearGradient id="gBar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A89845" />
          <stop offset="100%" stopColor="#6B0F1A" />
        </linearGradient>
      </defs>
      <line x1="0" y1="44" x2="28" y2="44" stroke="url(#gBar)" strokeWidth="0.8" />
      <text
        x="140" y="45"
        textAnchor="middle"
        fontFamily="'Palatino Linotype', Georgia, serif"
        fontSize="52"
        fontWeight="700"
        letterSpacing="14"
        fill="url(#gWord)"
      >
        NOX 
      </text>
      <line x1="192" y1="44" x2="220" y2="44" stroke="url(#gBar)" strokeWidth="0.8" />
      <line x1="0" y1="44" x2="28" y2="44" stroke="url(#gBar)" strokeWidth="0.8" />
      <text
        x="160" y="80"
        textAnchor="middle"
        fontFamily="'Palatino Linotype', Georgia, serif"
        fontSize="25"
        fontWeight="700"
        letterSpacing="6"
        fill="url(#gWord)"
      >
        Atelier 
      </text>
      <line x1="192" y1="44" x2="220" y2="44" stroke="url(#gBar)" strokeWidth="0.8" />
    </svg>
  );
}

export default NoxLogo;

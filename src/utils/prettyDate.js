export default ts =>
  new Intl.DateTimeFormat("fr-FR", {
    hour: "numeric",
    minute: "numeric"
  }).format(new Date(ts));

import { useEffect } from "react";

const HunterForm = () => {
  useEffect(() => {
    if (document.getElementById("hs-form-script")) return;

    const script = document.createElement("script");
    script.id = "hs-form-script";
    script.src = "https://js.hsforms.net/forms/embed/50421361.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4 text-center">
        Déjanos tus datos y un Hunter te contactará de inmediato
      </p>

      <div
        className="hs-form-frame"
        data-region="na1"
        data-portal-id="50421361"
        data-form-id="ddf8f49f-e0db-4628-9406-80802064f813"
      />
    </div>
  );
};

export default HunterForm;

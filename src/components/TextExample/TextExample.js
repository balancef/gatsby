import React from "react";

const TextExample = () => {
  return (
    <section className="container d-flex flex-wrap py-4">
      <div className="col-12 col-md-6 py-3">
        <h1 className="display-large">Display Large</h1>
        <h2 className="display-medium">Display Medium</h2>
        <h3 className="display-small">Display Small</h3>
      </div>
      <div className="col-12 col-md-6 py-3">
        <h1 className="headline-large">Headline Large</h1>
        <h2 className="headline-medium">Headline Medium</h2>
        <h3 className="headline-small">Headline Small</h3>
      </div>
      <div className="col-12 col-md-6 py-3">
        <h1 className="title-large">Title Large</h1>
        <h2 className="title-medium">Title Medium</h2>
        <h3 className="title-small">Title Small</h3>
      </div>
      <div className="col-12 col-md-6 py-3">
        <p className="body-large">Body Large</p>
        <p className="body-medium">Body Medium</p>
        <p className="body-small">Body Small</p>
      </div>
      <div className="col-12 col-md-6 py-3">
        <label className="label-large d-block">Label Large</label>
        <label className="label-medium d-block">Label Medium</label>
        <label className="label-small d-block">Label Small</label>
      </div>
    </section>
  );
};

export default TextExample;

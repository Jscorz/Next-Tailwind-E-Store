import React from "react";

export async function getServerSideProps(context) {
  const { params } = context;
  return {
    props: { id: params.id },
  };
}

function Description({ props }) {
  return <div>Description</div>;
}

export default Description;

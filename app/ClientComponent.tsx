"use client";

import { useEffect } from "react";
import { Schema, KnownTypeId } from "@sovereign-sdk/universal-wallet-wasm";

export const ClientComponent = () => {
  useEffect(() => {
    console.log(Schema, KnownTypeId);
  }, []);

  return null;
};

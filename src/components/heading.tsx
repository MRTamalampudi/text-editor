import { Select } from "@mantine/core";
import { useState } from "react";

export function Heading() {
  const [value, setValue] = useState<string | null>("H6");
  return (
    <Select
      data={["H1", "H2", "H3", "H4", "H5", "H6"]}
      value={value || "H6"}
      onChange={setValue}
    />
  );
}

import * as denojson from "../deno.json" assert { type: "json" };

const { name, version } = denojson.default;

export default {
  name,
  version,
};

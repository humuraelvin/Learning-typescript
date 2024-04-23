type JSONObject = { [k: string]: JSONValue };
type JSONPrimitives = number | string | boolean | null;
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitives | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

isJSON("hello");
isJSON([2, 4, 7, 9, 12, 20, 30]);
isJSON({ greeting: "Hello" });
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({ a: { b: [2, 3, "foo"] } });

// isJSON(() => "")

// isJSON(class{})

// isJSON(undefined)

// isJSON(new BigInt(342))

// isJSON(isJSON)

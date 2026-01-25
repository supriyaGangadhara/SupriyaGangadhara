// This is a test file to demonstrate ESLint errors
// Try writing code with errors below and see ESLint catch them in real-time!

// ❌ ERROR: Using 'any' type (will show red underline)
const badFunction = (props: any) => {
  return props;
};

// ❌ ERROR: Empty interface (will show red underline)
interface EmptyInterface {}

// ✅ CORRECT: Proper typing
interface GoodProps {
  name: string;
  age: number;
}

const goodFunction = (props: GoodProps) => {
  return props;
};

// ❌ ERROR: Unsafe optional chaining
const unsafe = (obj: any) => {
  return obj?.prop?.value?.data;
};

// ✅ CORRECT: Safe optional chaining with proper types
interface SafeObj {
  prop?: {
    value?: {
      data?: string;
    };
  };
}

const safe = (obj: SafeObj) => {
  return obj?.prop?.value?.data;
};

export { badFunction, goodFunction, unsafe, safe };

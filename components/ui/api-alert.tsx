import { Copy, Server } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";
import { useToast } from "./use-toast";

type Variant = "public" | "admin";

interface ApiAlertProps {
  title: string;
  description: string;
  variant?: Variant;
}

const textMap: Record<Variant, string> = {
  public: "Public",
  admin: "Admin",
};
const variantMap: Record<Variant, BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export default function ApiAlert({
  title,
  description,
  variant = "public",
}: ApiAlertProps) {
  const { toast } = useToast();
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast({
      description: "API Route copied to the clipboard",
    });
  };
  return (
    <Alert>
      <Server className="h-4 w-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant="outline" size="icon" onClick={onCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
}

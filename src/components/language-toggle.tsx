import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setLanguage(language === "cs" ? "vi" : "cs")}
        className="relative"
      >
        <Globe className="h-[1.2rem] w-[1.2rem]" />
        <span className="absolute -bottom-1 -right-1 text-xs font-bold bg-gray-100 dark:bg-gray-800 rounded-full w-5 h-5 flex items-center justify-center">
          {language.toUpperCase()}
        </span>
        <span className="sr-only">Toggle language</span>
      </Button>
    </div>
  )
}
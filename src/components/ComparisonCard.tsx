import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ComparisonCardProps {
  model: string;
  responseTime: number;
  tokensPerSecond: number;
  qualityScore: number;
}

export function ComparisonCard({ model, responseTime, tokensPerSecond, qualityScore }: ComparisonCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{model}</span>
          <Badge variant="outline" className="ml-2">
            Рейтинг: {qualityScore.toFixed(1)}/10
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Время отклика</p>
            <p className="text-2xl font-bold">≈ {responseTime.toFixed(0)} мс</p>
          </div>
          <div>
            <p className="text-sm font-medium">Скорость генерации</p>
            <p className="text-2xl font-bold">
              ≈ {tokensPerSecond.toFixed(0)} токенов/с
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
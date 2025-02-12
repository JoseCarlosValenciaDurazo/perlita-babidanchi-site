import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Droplets, Database } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Investment() {
  const { t } = useTranslation();

  return (
    <section id="investment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('investment.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('investment.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* US Perlite Gap Table */}
          <Card className="bg-white">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                {t('investment.perlite_gap.title')}
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('investment.perlite_gap.table_headers.problem')}</TableHead>
                    <TableHead>{t('investment.perlite_gap.table_headers.solution')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-gray-700">
                      {t('investment.perlite_gap.problem1')}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {t('investment.perlite_gap.solution1')}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-700">
                      {t('investment.perlite_gap.problem2')}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {t('investment.perlite_gap.solution2')}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Cost Advantage Table */}
          <Card className="bg-white">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                {t('investment.cost_advantage.title')}
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('investment.cost_advantage.metric')}</TableHead>
                    <TableHead>{t('investment.cost_advantage.traditional')}</TableHead>
                    <TableHead>{t('investment.cost_advantage.babidanchi')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-gray-700">{t('investment.cost_advantage.price')}</TableCell>
                    <TableCell className="text-gray-700">{t('investment.cost_advantage.price_traditional')}</TableCell>
                    <TableCell className="text-gray-700">{t('investment.cost_advantage.price_babidanchi')}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-700">{t('investment.cost_advantage.delivery')}</TableCell>
                    <TableCell className="text-gray-700">{t('investment.cost_advantage.delivery_traditional')}</TableCell>
                    <TableCell className="text-gray-700">{t('investment.cost_advantage.delivery_babidanchi')}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Key Investment Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Database className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('investment.deposits.title')}
                </h3>
                <p className="text-gray-700">
                  {t('investment.deposits.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('investment.location.title')}
                </h3>
                <p className="text-gray-700">
                  {t('investment.location.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Droplets className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('investment.water.title')}
                </h3>
                <p className="text-gray-700">
                  {t('investment.water.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Highlight Box */}
        <Card className="bg-white/50 backdrop-blur mb-8">
          <CardContent className="pt-6">
            <p className="text-xl font-semibold text-center text-gray-900">
              {t('investment.highlight')}
            </p>
          </CardContent>
        </Card>

        {/* Source Citation */}
        <p className="text-sm text-gray-500 text-center">
          {t('investment.source')}
        </p>
      </div>
    </section>
  );
}
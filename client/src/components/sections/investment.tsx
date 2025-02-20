import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Droplets, Database, TrendingUp, LineChart, Workflow } from "lucide-react";
import Map from "./Map";
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
    <section id="investment" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {t('investment.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('investment.subtitle')}
          </p>
        </div>

        {/* US Market Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t('investment.perlite_gap.title')}
                </h3>
              </div>
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
                    <TableCell className="text-gray-700 font-medium text-primary">
                      {t('investment.perlite_gap.solution1')}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-700">
                      {t('investment.perlite_gap.problem2')}
                    </TableCell>
                    <TableCell className="text-gray-700 font-medium text-primary">
                      {t('investment.perlite_gap.solution2')}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-gray-500 mt-4">
                External suppliers: 93% of imports come from Greece, 4% from China (USGS, 2024)
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <LineChart className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t('investment.stats.title')}
                </h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('investment.stats.headers.metric')}</TableHead>
                    <TableHead>{t('investment.stats.headers.y2020')}</TableHead>
                    <TableHead>{t('investment.stats.headers.y2024')}</TableHead>
                    <TableHead>{t('investment.stats.headers.trend')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries({
                    production: 'production',
                    imports: 'imports',
                    price: 'price',
                    dependency: 'dependency'
                  }).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="text-gray-700">
                        {t(`investment.stats.rows.${value}.label`)}
                      </TableCell>
                      <TableCell className="text-gray-700">
                        {t(`investment.stats.rows.${value}.y2020`)}
                      </TableCell>
                      <TableCell className="text-gray-700">
                        {t(`investment.stats.rows.${value}.y2024`)}
                      </TableCell>
                      <TableCell className="text-gray-700">
                        {t(`investment.stats.rows.${value}.trend`)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-gray-500 text-center mb-16">
          {t('investment.source')}
        </p>

        {/* Strategic Advantage Map Section */}
        <div className="mb-16">
          <Card className="bg-white shadow-lg max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Workflow className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t('investment.strategic_advantage.title')}
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                {t('investment.strategic_advantage.description')}
              </p>
              <div className="h-[400px] w-full">
                <Map />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Advantages Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Key Advantages of Babidanchi Perlite
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Database className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    {t('investment.deposits.title')}
                  </h4>
                  <p className="text-gray-700">
                    {t('investment.deposits.description')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <MapPin className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    {t('investment.location.title')}
                  </h4>
                  <p className="text-gray-700">
                    {t('investment.location.description')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Droplets className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    {t('investment.water.title')}
                  </h4>
                  <p className="text-gray-700">
                    {t('investment.water.description')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        
      </div>
    </section>
  );
}
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
            The Local Solution to America's Perlite Dependency
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* US Perlite Gap Table */}
          <Card className="bg-white">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                The Growing U.S. Perlite Gap
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Problem</TableHead>
                    <TableHead>Our Solution</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-gray-700">
                      U.S. imports 93% of perlite from distant countries (USGS, 2024)
                    </TableCell>
                    <TableCell className="text-gray-700">
                      Strategic location: 3-hour delivery to Arizona vs. 30+ days from Greece
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-700">
                      U.S. production ↓15% since 2020
                    </TableCell>
                    <TableCell className="text-gray-700">
                      Two massive deposits (50M+ ton reserves)
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
                Cost Advantage
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead>Traditional Imports</TableHead>
                    <TableHead>Mina Babidanchi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-gray-700">Avg. Price/ton</TableCell>
                    <TableCell className="text-gray-700">$75 + shipping</TableCell>
                    <TableCell className="text-gray-700">$60 (local logistics)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-700">Delivery Time</TableCell>
                    <TableCell className="text-gray-700">30-45 days</TableCell>
                    <TableCell className="text-gray-700">3 hours</TableCell>
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
              "Join the shift: Supply America's perlite demand from Mexico's most strategic mine."
            </p>
          </CardContent>
        </Card>

        {/* Source Citation */}
        <p className="text-sm text-gray-500 text-center">
          Data source: U.S. Geological Survey (USGS) Mineral Commodity Summaries, 2024
        </p>
      </div>
    </section>
  );
}
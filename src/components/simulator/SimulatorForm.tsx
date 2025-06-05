
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SimulatorFormProps {
  revenue: string;
  setRevenue: (value: string) => void;
  businessType: string;
  setBusinessType: (value: string) => void;
  employees: string;
  setEmployees: (value: string) => void;
  children?: React.ReactNode;
}

const SimulatorForm = ({
  revenue,
  setRevenue,
  businessType,
  setBusinessType,
  employees,
  setEmployees,
  children
}: SimulatorFormProps) => {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="dark:text-white">Simulateur d'Obligations Fiscales</CardTitle>
        <CardDescription className="dark:text-gray-400">
          Estimez vos charges fiscales annuelles au Niger
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <Label htmlFor="revenue" className="dark:text-white">Chiffre d'affaires annuel (FCFA)</Label>
            <Input
              id="revenue"
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              placeholder="Ex: 50000000"
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <Label htmlFor="businessType" className="dark:text-white">Type d'activité</Label>
            <Select value={businessType} onValueChange={setBusinessType}>
              <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <SelectValue placeholder="Sélectionnez" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="commerce">Commerce</SelectItem>
                <SelectItem value="service">Services</SelectItem>
                <SelectItem value="industrie">Industrie</SelectItem>
                <SelectItem value="tech">Technologie</SelectItem>
                <SelectItem value="transport">Transport</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="employees" className="dark:text-white">Nombre d'employés</Label>
            <Input
              id="employees"
              type="number"
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              placeholder="Ex: 5"
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        {children}
      </CardContent>
    </Card>
  );
};

export default SimulatorForm;

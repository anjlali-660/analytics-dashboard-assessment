import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Search, Filter, Download } from "lucide-react";
import { evData, EVRecord } from "@/data/evData";

export const EVDataTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter data based on search term
  const filteredData = evData.filter(vehicle =>
    Object.values(vehicle).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Paginate data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const getVehicleTypeBadge = (type: string) => {
    if (type.includes('BEV')) {
      return <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">BEV</Badge>;
    }
    return <Badge className="bg-electric-green/20 text-electric-green border-electric-green/30">PHEV</Badge>;
  };

  const getEligibilityBadge = (eligibility: string) => {
    if (eligibility.includes('Eligible')) {
      return <Badge className="bg-electric-green/20 text-electric-green border-electric-green/30">Eligible</Badge>;
    }
    if (eligibility.includes('unknown')) {
      return <Badge className="bg-warning-amber/20 text-warning-amber border-warning-amber/30">Unknown</Badge>;
    }
    return <Badge className="bg-tesla-red/20 text-tesla-red border-tesla-red/30">Not Eligible</Badge>;
  };

  return (
    <Card className="p-6 border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">EV Registration Data</h3>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search vehicles..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Make & Model</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Range</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>CAFV Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((vehicle) => (
              <TableRow key={vehicle.vin} className="hover:bg-muted/30">
                <TableCell>
                  <div>
                    <div className="font-medium text-foreground">
                      {vehicle.make} {vehicle.model}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      VIN: {vehicle.vin.substring(0, 8)}...
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-foreground">{vehicle.modelYear}</TableCell>
                <TableCell>{getVehicleTypeBadge(vehicle.electricVehicleType)}</TableCell>
                <TableCell>
                  <span className="text-foreground">
                    {vehicle.electricRange > 0 ? `${vehicle.electricRange} mi` : 'N/A'}
                  </span>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-foreground">{vehicle.city}</div>
                    <div className="text-xs text-muted-foreground">{vehicle.county} County</div>
                  </div>
                </TableCell>
                <TableCell>{getEligibilityBadge(vehicle.cafvEligibility)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} vehicles
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};
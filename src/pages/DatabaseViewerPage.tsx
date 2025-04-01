
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

// Mock database schema since we can't directly query the schema in this context
const databaseTables = [
  {
    name: 'users',
    description: 'Stores user account information',
    columns: [
      { name: 'id', type: 'INT', isPrimary: true, isNullable: false, description: 'Auto-incrementing primary key' },
      { name: 'username', type: 'VARCHAR(50)', isPrimary: false, isNullable: false, description: 'Unique username' },
      { name: 'email', type: 'VARCHAR(100)', isPrimary: false, isNullable: false, description: 'Unique email address' },
      { name: 'password', type: 'VARCHAR(255)', isPrimary: false, isNullable: false, description: 'Hashed password' },
      { name: 'created_at', type: 'TIMESTAMP', isPrimary: false, isNullable: true, description: 'Account creation timestamp' }
    ]
  },
  {
    name: 'orders',
    description: 'Stores order information',
    columns: [
      { name: 'id', type: 'INT', isPrimary: true, isNullable: false, description: 'Auto-incrementing primary key' },
      { name: 'user_id', type: 'INT', isPrimary: false, isNullable: false, description: 'Foreign key to users table' },
      { name: 'restaurant_id', type: 'INT', isPrimary: false, isNullable: false, description: 'Restaurant identifier' },
      { name: 'status', type: 'ENUM', isPrimary: false, isNullable: false, description: 'Order status (pending, confirmed, completed, cancelled)' },
      { name: 'total_amount', type: 'DECIMAL(10, 2)', isPrimary: false, isNullable: false, description: 'Total order amount' },
      { name: 'order_date', type: 'TIMESTAMP', isPrimary: false, isNullable: true, description: 'Order creation timestamp' }
    ]
  },
  {
    name: 'order_items',
    description: 'Stores individual items within orders',
    columns: [
      { name: 'id', type: 'INT', isPrimary: true, isNullable: false, description: 'Auto-incrementing primary key' },
      { name: 'order_id', type: 'INT', isPrimary: false, isNullable: false, description: 'Foreign key to orders table' },
      { name: 'dish_id', type: 'INT', isPrimary: false, isNullable: false, description: 'Dish identifier' },
      { name: 'quantity', type: 'INT', isPrimary: false, isNullable: false, description: 'Quantity of items ordered' },
      { name: 'price', type: 'DECIMAL(10, 2)', isPrimary: false, isNullable: false, description: 'Price per item' }
    ]
  }
];

const DatabaseViewerPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (databaseTables.length > 0) {
        setSelectedTable(databaseTables[0].name);
      }
      toast({
        title: "Database Schema Loaded",
        description: `Showing schema for ${databaseTables.length} tables`,
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [toast]);
  
  const getSelectedTableData = () => {
    return databaseTables.find(table => table.name === selectedTable);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Database Viewer</h1>
          <p className="text-gray-600 mb-8">Explore the database schema and table structures</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle className="text-xl">Tables</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-full" />
                  </div>
                ) : (
                  <Tabs
                    orientation="vertical"
                    value={selectedTable || undefined}
                    onValueChange={(value) => setSelectedTable(value)}
                    className="w-full"
                  >
                    <TabsList className="flex flex-col items-stretch h-auto space-y-1">
                      {databaseTables.map(table => (
                        <TabsTrigger
                          key={table.name}
                          value={table.name}
                          className="justify-start text-left py-2"
                        >
                          {table.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                )}
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle className="text-xl">
                  {isLoading ? (
                    <Skeleton className="h-8 w-1/2" />
                  ) : (
                    <>Table: {selectedTable} <Badge className="ml-2">{getSelectedTableData()?.columns.length || 0} columns</Badge></>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                ) : selectedTable ? (
                  <>
                    <p className="text-gray-600 mb-4">{getSelectedTableData()?.description}</p>
                    <Separator className="my-4" />
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="text-left py-2 px-4 border">Column</th>
                            <th className="text-left py-2 px-4 border">Type</th>
                            <th className="text-left py-2 px-4 border">Nullable</th>
                            <th className="text-left py-2 px-4 border">Key</th>
                            <th className="text-left py-2 px-4 border">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getSelectedTableData()?.columns.map(column => (
                            <tr key={column.name} className="border-b hover:bg-gray-50">
                              <td className="py-2 px-4 border font-medium">{column.name}</td>
                              <td className="py-2 px-4 border"><code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{column.type}</code></td>
                              <td className="py-2 px-4 border">{column.isNullable ? "Yes" : "No"}</td>
                              <td className="py-2 px-4 border">
                                {column.isPrimary && <Badge variant="secondary" className="bg-blue-100 text-blue-800">Primary</Badge>}
                              </td>
                              <td className="py-2 px-4 border text-gray-600">{column.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-600">Please select a table to view its structure</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DatabaseViewerPage;
